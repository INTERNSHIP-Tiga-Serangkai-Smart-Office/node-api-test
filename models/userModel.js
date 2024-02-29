const mongoose = require('mongoose')

const userScheme = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please enter email"]
        },
        password: {
            type: String,
            required: [true, "Please enter a password"]
        }
       
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userScheme);

module.exports = User;