const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    name: {
        email: String,
        firstName: String,
        lastName: String
    }
}, {

    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
})

module.exports = model('user', userSchema)