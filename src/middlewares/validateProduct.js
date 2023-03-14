const validateProduct = (req, res, next) => {
  const { name, price, stock } = req.body;

  if( name === undefined || price === undefined || stock === undefined ) {
    return res.status(400).json({ error: 'the product is missing properties to be inserted' })
  }

  if( name.length > 0 ) {
    return res.status(400).json({ error: 'the product name have to be more than 1 char' })
  }

  if( stock < 0 ) {
    return res.status(400).json({ error: 'the product stock cannot be less than 0' })
  }

  if( price <= 0 ) {
    return res.status(400).json({ error: 'the product price have to be greater than 0' })
  }

  next();
}

export { validateProduct }