import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(2).required(),
  price: Joi.number().greater(0).required(),
});

const validateProductSchema = (product) => {
  const { error } = productSchema.validate(product);
  if (error) return { error: error.details[0].message };
  return { error: undefined };
};

export { validateProductSchema };