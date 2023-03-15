import * as productService from '../services/productService.js'

const insertProduct = async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    const product = await productService.insertProduct({
      name, price, stock
    });
    res.status(200).json({ product });
  } catch (e) {
    res.status(500).json(e);
  }
}

export { insertProduct };