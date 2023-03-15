import { validateSaleSchema } from "../validations/validateSaleSchema.js";

const validateSale = (req, res, next) => {
  const { userId, products, total_price,
    delivery_address, delivery_number, payment } = req.body;

  const { error } = validateSaleSchema({
    userId, products, total_price, delivery_address,
    delivery_number, payment
  })

  if (error) return res.status(500).json({ error })

  next();
}

export { validateSale }