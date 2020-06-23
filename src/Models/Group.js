const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true 
    },
    administrator: { 
        name: { 
            type: String,
        },
        username: {
            type: String,
        },
        email: { 
            type: String,
        }
    },
    revealDate: { 
        type: Date,
    },
    minValue: {
        type: Number,
        required: true 
    },
    maxValue: {
        type: Number,
        required: true 
    },
    revealPlaceLatitude: {
        type: Number
    },
    revealPlaceLongetude: {
        type: Number
    },
    members: [{
        name: { 
            type: String,
        },
        username: {
            type: String,
        },
        email: { 
            type: String,
        }
    }]
});

module.exports = mongoose.model('Group', GroupSchema);