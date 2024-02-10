//setting up the router
const express= require('express');
const router= express.Router();
const productController = require('../controllers/productController');
//seeting up the routes for controller actions
router.post('/create',productController.createProduct);
router.get('/',productController.listProducts);
router.delete('/:id',productController.deleteProduct);
router.post('/:id/update_quantity',productController.updateQuantity);

module.exports=router;