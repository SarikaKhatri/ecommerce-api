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
    try {
        const products = await Product.find();
        res.json({ data: { products } });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

//Delete a product
exports.deleteProduct = async (req,res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(productId);
    
        if (!deletedProduct) {
          return res.status(404).json({ data: { message: 'Product not found' } });
        }
    
        res.json({ data: { message: 'Product deleted' } });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

//Update Quantity of a product
exports.updateQuantity = async (req,res) => {
    
};
