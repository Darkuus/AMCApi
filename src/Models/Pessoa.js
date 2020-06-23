const mongoose = require('mongoose');

const PessoaSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true 
    },
    email: { 
        type: String,
        required: true,
        unique: true 
    },
    birthdate: {
        type: Date
    },
    username: {
        type: String,
        required: true,
    },
    password: { 
        type: String,
        required: true 
    },
    tokens: [{
        token:{
            type: String,
            required: true
        }
    }]
});

module.exports = mongoose.model('Pessoa', PessoaSchema);