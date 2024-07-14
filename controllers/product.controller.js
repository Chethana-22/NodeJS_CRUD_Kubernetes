const Product = require('../models/product.model')

const getProducts = async(req, res) =>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

const getSingleProduct = async(req, res) =>{
    try{  
        const { id } = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    }catch{
        res.status(500).json({message: error.message});
    }
}

const createProduct = async(req, res) =>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

const updateProduct = async(req, res) =>{
    try{
        const {id} = req.params;
        const products = await Product.findByIdAndUpdate(id, req.body);
        if (!products){
            return res.status(400).json({message: "product not found"})
        }
        const updatedproducts = await product.findById(id);
        res.status(200).json(updatedproducts);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}


const deleteProduct = async(req, res) =>{
    try{
        const { id } = req.params;
        const products = await Product.findByIdAndDelete(id);
        if (!products) {
            return res.status(404).json({message: error.message});
        }
    }catch(error){
        res.status(500).json({message:error.message});
    }
}


module.exports = {
    getProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
};