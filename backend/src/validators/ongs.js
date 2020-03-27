const { Joi } = require('celebrate');

const createSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  whatsapp: Joi.number().required(),
  city: Joi.string().required(),
  uf: Joi.string().required().length(2),
});

module.exports = { createSchema };
