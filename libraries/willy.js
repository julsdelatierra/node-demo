var express = require("express"),
    _ = require('underscore'),
    crypto = require('crypto'),
    Chance = require('chance');

module.exports.App = function(params) {
    var app = express();

    app['urls'] = {};

    app.urls['load'] = function(resourceUri, controller) {
        var verbs = {
            'read': 'get',
            'create': 'post',
            'update': 'put',
            'destroy': 'delete'
        };
        for (var handler in verbs) {
            var method = verbs[handler];
            if (controller[handler]) {
                app[method](resourceUri, _.bind(controller["pre" + handler], controller));
            }
        }
    };

    return app;
};

module.exports.Controller = {
    settings: {
        loginRequired: false,
        logoutRequired: false
    },
    parseData: function(request, response, next) {
        next(request, response);
    },
    dumpUser: function(request, response, next) {
        next(request, response);
    },
    verifySession: function(request, response, next) {
        next(request, response);
    },
    preread: function(request, response) {
        var instance = this;
        if (instance['read']) {
            request['args'] = request.query;
            instance.verifySession(request, response, function() {
                instance.dumpUser(request, response, function() {
                    instance.parseData(request, response, function() {
                        instance['read'](request, response);
                    });
                });
            });
        }
    },
    precreate: function(request, response) {
        var instance = this;
        if (instance['create']) {
            request['args'] = request.body;
            if ('model' in request.body) {
                request['args'] = JSON.parse(request.body.model);
            }
            instance.verifySession(request, response, function() {
                instance.dumpUser(request, response, function() {
                    instance.parseData(request, response, function() {
                        instance['create'](request, response);
                    });
                });
            });
        }
    },
    preupdate: function(request, response) {
        var instance = this;
        if (instance['update']) {
            request['args'] = request.body;
            if ('model' in request.body) {
                request['args'] = JSON.parse(request.body.model);
            }
            instance.verifySession(request, response, function() {
                instance.dumpUser(request, response, function() {
                    instance.parseData(request, response, function() {
                        instance['update'](request, response);
                    });
                });
            });
        }
    },
    predestroy: function(request, response) {
        var instance = this;
        if (instance['destroy']) {
            request['args'] = request.query;
            instance.verifySession(request, response, function() {
                instance.dumpUser(request, response, function() {
                    instance.parseData(request, response, function() {
                        instance['destroy'](request, response);
                    });
                });
            });
        }
    },
    extend: function(object, args) {
        var instance = _.extend(object, this);
        if (args != undefined) {
            instance['settings'] = {
                loginRequired: args.loginRequired || false,
                logoutRequired: args.logoutRequired || false
            }
        }
        return instance;
    }
};

module.exports.alphanumeric = function(length) {
    var m = length || 6,
        s = '',
        r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i=0; i < m; i++) {
        s += r.charAt(Math.floor(Math.random()*r.length));
    }
    return s;
};

module.exports.sha1 = function(string) {
    var shasum = crypto.createHash('sha1').update(string);
    return shasum.digest('hex');
}

module.exports.generateToken = function() {
    var pool = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    var chance = new Chance();
    return chance.string({length:15, pool:pool});
}