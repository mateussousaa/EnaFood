import productModel from "../models/Product.js"

const insertProduct = async (product) => productModel.create(product);

const getProducts = async () => productModel.find({});

export { insertProduct, getProducts };