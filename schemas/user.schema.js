const Joi = require('joi');

const id = Joi.string().uuid(); //id del usuario
const name = Joi.string(); //nombre del usuario
const lastname = Joi.string();
const username = Joi.string();
const password = Joi.string();
const email = Joi.string();
const created_at = Joi.string();
const update_at = Joi.string();
const confirmation_token = Joi.string();
const enabled = Joi.string();
const image = Joi.string();

const createUserSchema = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
  username: username.required(),
  password: password.required(),
  email: email.required(),
  image: image
})

const updateUserSchema = Joi.object({
  name: name,
  lastname: lastname,
  username: username,
  password: password,
  image: image
})

const getUserSchema = Joi.object({
  id: id.required(),
})

module.exports = {
  getUserSchema,
  updateUserSchema,
  createUserSchema
}
