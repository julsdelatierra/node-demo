var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
    boyfriend: {
        type: String
    },
    girlfriend: {
        type: String
    },
    managers: [{
        type: Schema.ObjectId,
        ref: 'User'
    }],
    date: {
        type: Date
    },
    couplePicture: {
        type: String
    }
    destinationPicture: {
        type: String
    },
    quote: {
        type: String
    },
    amounts: {
        lodging: {
            type: Number
        },
        transportation: {
            type: Number
        },
        extra: {
            type: Number
        }
    }
});

EventSchema.pre('save', function(next) {
    next();
});

module.exports = mongoose.model('Event', EventSchema);
