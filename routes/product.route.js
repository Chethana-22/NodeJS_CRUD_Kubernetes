const express = require('express');
const router = express.Router();
const {getProducts, deleteProduct, getSingleProduct, createProduct, updateProduct} = require('../controllers/product.controller.js');


router.get('/', getProducts);
router.get('/:id', getSingleProduct);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);


module.exports = router;