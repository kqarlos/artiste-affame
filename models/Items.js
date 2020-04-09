const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creates schema
const ItemSchema = new Schema({
    name: String,
    description: String,
    icon: String,
    cost: Number,
    src: String

});

const Item = mongoose.model('Item', ItemSchema);
module.exports =Item;