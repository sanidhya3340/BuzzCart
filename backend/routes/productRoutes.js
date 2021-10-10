const express = require('express');
const router = express.Router();

const { getProductById, getAllProducts } = require('../controller/productControllers')

router.get('/', getAllProducts)

router.get('/:id', getProductById)

module.exports = router;