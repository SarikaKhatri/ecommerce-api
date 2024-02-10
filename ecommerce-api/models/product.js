const mongoose= require('mongoose');

//setting up schema for product
const productSchema= new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    quantity: 
    {
        type: Number,
        required: true
    }
});
const Product= mongoose.model('Product', productSchema);
module.exports= Product;