const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
        nome: {
            type: String,
            maxlength: 50
        },
        email: {
            type: String,
            trim: true,
            unique: 1
        },
        senha: {
            type: String,
            minglength: 5
        },
        sobrenome: {
            type: String,
            maxlength: 50
    },
    date: {
      type: Date,
      default: Date.now
    }
}, { autoCreate : true })

module.exports = mongoose.model('user', UserSchema);
