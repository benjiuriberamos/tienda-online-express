const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum();

const createCategorySchema = Joi.object({
  name: name.required(),
})

const updateCategorySchema = Joi.object({
  name: name,
})

const getCategorySchema = Joi.object({
  id: id.required(),
})

module.exports ={
  getCategorySchema,
  updateCategorySchema,
  createCategorySchema
}
