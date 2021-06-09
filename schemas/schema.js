"use strict";

 // Importaçao frameworks
const Joi = require("joi");

const schemaUserCriado = Joi.object({
  message: Joi.string().required(),
  type: Joi.string().required(),
  code: Joi.number().required(),
});

const schemaUser = Joi.object({
  id: Joi.number().required(),
  username: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  phone: Joi.string().required(),
  userStatus: Joi.number().required(),
});



module.exports = {
  schemaUserCriado,
  schemaUser
  };