const express = require('express');
const usersService = require('./../services/user.service');
const validatorHandler = require('../middlewares/validator.handler');
const { getUserSchema,  updateUserSchema, createUserSchema} = require('./../schemas/user.schema');

const router = express.Router();
const service = new usersService();

router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users)
});

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res) => {
  const data = req.body
  const newUser = await service.create(data);
  res.status(201).json(newUser);
});

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id }= req.params;
    const user = await service.findOne(id);
    res.json(user)
  } catch (error) {
    next(error);
  }

});

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id }= req.params;
    const data = req.body
    const user = await service.update(id, data)
    res.json(user)
  } catch (error) {
    next(error);
  }
});

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
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
