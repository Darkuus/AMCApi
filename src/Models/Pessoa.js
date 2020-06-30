const mongoose = require('mongoose');

const PessoaSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true 
    },
    username: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
    },
    email: { 
        type: String,
        required: true,
        unique: true 
    },
    birthdate: {
        type: Date,
        required: true
    },    
    password: { 
        type: String,
        required: true 
    },
    wishList:[{
        productName: {
            type: String,
        },
        estimatedPrice: {
            type: Number
        }
    }]
});

module.exports = mongoose.model('Pessoa', PessoaSchema);