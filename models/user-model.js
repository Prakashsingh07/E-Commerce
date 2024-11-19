const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://araprakash8:y1p7qjhSDCyRT1Wq@cluster0.bbxft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const {Schema, model} = require('mongoose');
const user = new Schema({
    fullname: String,
    email: String,
    password: String,
    cart: String,
    cart:{
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    orders:{
        type: Array,
        default: []
    },
    contact: Number,
    picture: String,
})

const User = model('User', user)
module.exports = User;