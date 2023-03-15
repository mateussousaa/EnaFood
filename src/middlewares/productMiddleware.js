import { validateProductSchema } from "../validations/validateProductSchema.js";

const validateProduct = (req, res, next) => {
  const { name, price, stock } = req.body;

  const { error } = validateProductSchema({
    name, price, stock
  });

  if(error) return res.status(500).json({ error });

  next();
}

export { validateProduct }