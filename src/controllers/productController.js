import * as productService from '../services/productService.js'

const insertProduct = async (req, res) => {
  try {
    const product = await productService.insertProduct(req.body);
    res.status(200).json({ product });
  } catch (e) {
    res.status(500).json(e);
  }
}

export { insertProduct };