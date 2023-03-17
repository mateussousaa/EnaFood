import { validateProductSchema } from '../validations/validateProductSchema.js';

const validateProduct = (req, res, next) => {
  const { name, price } = req.body;

  const { error } = validateProductSchema({ name, price });

  if (error) return res.status(500).json({ error });

  next();
};

export { validateProduct };