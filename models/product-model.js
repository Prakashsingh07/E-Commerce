const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
image:String,
name:String,
price:String,
discount:{
    type: Number,
    default:0
},
bigColor:String,
panelcolor:String,
textXolor:String
})

mongoose.exports = mongoose.model("product",productSchema)