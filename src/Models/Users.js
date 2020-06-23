const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name : String,
    password : String
});

module.exports = mongoose.model('Users', UsersSchema);