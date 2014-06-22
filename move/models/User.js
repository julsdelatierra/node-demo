var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,})?$/
    },
    phone: {
        type: String
    }
    password: {
        type: String
    },
    activationCode: {
        type: String
    },
    invitationCode: {
        type: String
    }
});

UserSchema.pre('save', function(next) {
    next();
});

module.exports = mongoose.model('User', UserSchema);
