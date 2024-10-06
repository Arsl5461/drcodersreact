const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    todo: {
        type: String
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("Todo", todoSchema)