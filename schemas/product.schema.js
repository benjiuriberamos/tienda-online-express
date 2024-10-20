const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string();
const price = Joi.number().integer();
const image = Joi.string();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image
})

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
})

const getProductSchema = Joi.object({
  id: id.required(),
})

module.exports = {
  getProductSchema,
  updateProductSchema,
  createProductSchema
}
