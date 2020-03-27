const { Joi } = require('celebrate');

const schema = Joi.object().keys({
  id: Joi.string().required(),
});

module.exports = { schema };
