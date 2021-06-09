"use strict";

 // Importaçao frameworks
const Joi = require("joi");

const schemaUserCriado = Joi.object({
  code: Joi.number().required(),
  message: Joi.string().required(),
  type: Joi.string().required(),
});

const schemaUser = Joi.object({
  email: Joi.string().required(),
  firstName: Joi.string().required(),
  id: Joi.number().required(),
  lastName: Joi.string().required(),
  password: Joi.string().required(),
  phone: Joi.string().required(),
  userStatus: Joi.number().required(),
  username: Joi.string().required(),
});



module.exports = {
  schemaUser,
  schemaUserCriado
};