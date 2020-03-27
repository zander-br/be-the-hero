const { Joi } = require('celebrate');

const createSchema = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required(),
  value: Joi.number().required(),
});

const deleteSchema = Joi.object().keys({
  id: Joi.number().required(),
});

const getQuerySchema = Joi.object().keys({
  page: Joi.number(),
});

module.exports = { createSchema, deleteSchema, getQuerySchema };
