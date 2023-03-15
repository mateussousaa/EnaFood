import validateUserSchema from '../validations/validateUserSchema.js'

const validateUser = (req, res, next) => {
  const { name, email, password } = req.body;

  const { error } = validateUserSchema({
    name, email, password
  })

  if (error) res.status(500).json({ error })

  next();
}

export { validateUser }