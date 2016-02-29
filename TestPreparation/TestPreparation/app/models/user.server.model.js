var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        // Set a unique 'username' index
        unique: true
    },
    password: String
});

module.exports = mongoose.model('user', userSchema);