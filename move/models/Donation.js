var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DonationSchema = new Schema({
    userId: {
        type: String
    },
    amount: {
        type: String
    },
    expense: {
        type: String
    }
    message: {
        type: String
    },
    transactionInfo: {
        type: Schema.Types.Mixed
    }
});

DonationSchema.pre('save', function(next) {
    next();
});

module.exports = mongoose.model('Donation', DonationSchema);
