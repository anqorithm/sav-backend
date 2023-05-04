const Joi = require("joi");

const productSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required().min(0),
  imageUrl: Joi.string().uri().required(),
  numberOfInstallments: Joi.number().required().min(1).integer(),
});

export default productSchema;
