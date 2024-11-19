const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullname:String,
    emai:String,
    password:String,
    products:{
        type:Array,
        default:[]
    },
    picture:String,
    gstin:String
})

module.export = mongoose.model("owner",ownerSchema);