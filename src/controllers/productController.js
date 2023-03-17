import * as productService from '../services/productService.js'

const insertProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const product = await productService.insertProduct({ name, price });

    return res.status(201).json({ product });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    return res.status(200).json({ products })
  } catch(error) {
    return res.status(500).json({ error })
  }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    const updatedProduct = await productService.updateProduct(id, { name, price });
    return res.status(200).json({ product: updatedProduct });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export { insertProduct, getProducts, updateProduct };