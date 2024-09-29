const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    password: {
        type: String
    },
    isMarried: {
        type: Boolean
    }
})

module.exports = mongoose.model("User", userSchema)