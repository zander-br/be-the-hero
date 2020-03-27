const { Joi } = require('celebrate');

const schema = Joi.object({
  authorization: Joi.string().required(),
}).unknown();

module.exports = { schema };
