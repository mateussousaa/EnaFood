import Joi from 'joi';

const userSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.email().required(),
  password: Joi.string().required(),
})

const validateUserSchema = (user) => {
  const { error } = userSchema.validate(user);
  if(error) return { error: error.details[0].message}
  return { error: undefined }
}

export { validateUserSchema };