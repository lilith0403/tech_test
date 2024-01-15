const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    name: String,
    email: String,
    birth: String,
})

module.exports = Person