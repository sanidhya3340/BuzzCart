const Product = require('../models/product')

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products)
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
}

const getProductById = async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        res.json(products)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" })
    }
}

const postProduct = async (req, res) => {
      const postProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        countInStock: req.body.countInStock,
        imageUrl: req.body.imageUrl,
        type: req.body.type,
      });

      try {
        const savedProduct = await postProduct.save();
        res.json(savedProduct);
      } catch (err) {
        res.json({ message: err });
      }
}

module.exports= {
    getAllProducts,
    getProductById,
    postProduct
}