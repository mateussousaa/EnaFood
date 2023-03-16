import Joi from "joi"
import joiObjectid from "joi-objectid";

const objectId = joiObjectid(Joi);

const productItem = Joi.object({
  productId: objectId().required(),
  price: Joi.number().greater(0).required(),
  quantity: Joi.number().min(1).required(),
})

const saleSchema = Joi.object({
  userId: objectId().required(),
  delivery_address: Joi.string().min(4).required(),
  delivery_number: Joi.string().min(11).max(14).required(),
  payment: Joi.string().required(),
})

const validateSaleSchema = (sale) => {
  const { error } = saleSchema.validate(sale);
  if(error) return { error: error.details[0].message}
  return { error: undefined }
}

const validateProductToSaleSchema = (product) => {
  const { error } = productItem.validate(product);
  if(error) return { error: error.details[0].message}
  return { error: undefined }
}

export { validateSaleSchema, validateProductToSaleSchema }