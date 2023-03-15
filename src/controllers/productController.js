import * as productService from '../services/productService.js'

const insertProduct = async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    const product = await productService.insertProduct({
      name, price, stock
    });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error });
  }
}

const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.status(200).json({ products })
  } catch(error) {
    res.status(500).json({ error })
  }
}

export { insertProduct, getProducts };