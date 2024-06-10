const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "product":String,
        "quantity":String,
        "price":String,
        "description":String
    }
)

let productModel = mongoose.model("products",schema)
module.exports = {productModel}