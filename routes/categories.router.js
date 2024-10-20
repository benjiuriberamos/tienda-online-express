const express = require('express');
const categoriesService = require('../services/category.service');
const validatorHandler = require('../middlewares/validator.handler');
const { getCategorySchema,  updateCategorySchema, createCategorySchema} = require('./../schemas/category.schema');

const router = express.Router();
const service = new categoriesService();

router.get('/',
  async (req, res) => {
  const category = await service.find();
  // const category = await service.find2();
  res.json(category)
});

router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res) => {
  const data = req.body
  const newCategorie = await service.create(data);
  res.status(201).json(newCategorie);
});

router.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category)
    } catch (error) {
      next(error);
    }

});

router.patch('/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
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
  validatorHandler(getCategorySchema, 'params'),
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
