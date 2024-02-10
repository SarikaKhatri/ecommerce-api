const Product=require('../models/product');

//Add products to the database
module.exports.createProduct = async (req,res) => {
    try {
        //creating a new product 
        let product = await Product.create({
            name : req.body.name,
            quantity: req.body.quantity
        });
        //showing the product created in response
        res.json({ data: { product: product } });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

//List all products
exports.listProducts =async (req,res) => {

};

//Delete a product
exports.deleteProduct = async (req,res) => {

};

//Update Quantity of a product
exports.updateQuantity = async (req,res) => {

};
