import productModel from "../models/Product.js"

const insertProduct = async (product) => productModel.create(product);

export { insertProduct };