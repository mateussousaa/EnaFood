import productModel from "../models/Product.js"

const insertProduct = async (product) => {
  const findedProduct = await productModel.find({ name: product.name });
  if(findedProduct.length) {
    throw new Error('product already exists');
  }
  return productModel.create(product);
}
const getProducts = async () => productModel.find({});

const updateProduct = async (id, product) => productModel.findByIdAndUpdate(id, product, { new: true });

export { insertProduct, getProducts, updateProduct };