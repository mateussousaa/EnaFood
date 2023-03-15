import { validateSaleSchema } from "../validations/validateSaleSchema";

const validateSale = (req, res, next) => {
  const { userId, products, total_price,
    delivery_address, delivery_number } = req.body;

  const { error } = validateSaleSchema({
    userId, products, total_price,
    delivery_address, delivery_number
  })

  if (error) res.status(500).json({ error })

  next();
}

export { validateSale }