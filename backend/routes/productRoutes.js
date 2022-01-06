const express = require('express');
const router = express.Router();

const { getProductById, getAllProducts, postProduct } = require('../controller/productControllers')

router.get('/', getAllProducts)

router.get('/:id', getProductById)

router.post('/',postProduct)

module.exports = router;