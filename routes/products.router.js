const express = require('express');
const productsService = require('./../services/product.service');
const validatorHandler = require('../middlewares/validator.handler');
const { getProductSchema,  updateProductSchema, createProductSchema} = require('./../schemas/product.schema');

const router = express.Router();
const service = new productsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  // const products = await service.find2();
  res.json(products)
});

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
  const data = req.body
  const newProduct = await service.create(data);
  res.status(201).json(newProduct);
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id }= req.params;
    const product = await service.findOne(id);
    res.json(product)
  } catch (error) {
    next(error);
  }

});

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id }= req.params;
    const data = req.body
    const product = await service.update(id, data)
    res.json(product)
  } catch (error) {
    next(error);
  }
});

router.delete('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    rpta = await service.delete(id)
    res.json(rpta)
  } catch (error) {
    next(error);
  }

});


module.exports = router;
