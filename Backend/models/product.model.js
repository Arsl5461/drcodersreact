const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: String
    },
    reviews: {
        type: String
    }
})

module.exports = mongoose.model("Product", productSchema)