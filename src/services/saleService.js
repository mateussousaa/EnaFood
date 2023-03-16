import mongoose from "mongoose";
import saleModel from "../models/Sale.js";
import userModel from "../models/User.js"
import productModel from "../models/Product.js"

const insertSale = async (sale) => {
  const session = await mongoose.startSession();
  const options = { session }
  try {
    await session.startTransaction();
    const findedUser = await userModel.findById(sale.userId, null, options);
    if(!findedUser) throw new Error('invalid userId');
    
    const { products } = sale;
    const productsList = products.map(async (p) => productModel.findById(p.productId, null, options));
    const resultProducts = await Promise.all(productsList);

    const hasInvalidProductId = resultProducts.some((p) => p === null);
    if(hasInvalidProductId) throw new Error('in the products list has a invalid productId')

    const hasInvalidQuantity = resultProducts.every((p) => {
      const findedProduct = products.find((product) => p.id === product.productId)
      return p.stock < findedProduct.quantity;
    })

    if(hasInvalidQuantity) throw new Error('exists invalid quantity of products');

    const decrementStock = resultProducts.map(async (p) => {
      const findedProduct = products.find((product) => p.id === product.productId);
      const newStock = p.stock - findedProduct.quantity;
      return productModel.findByIdAndUpdate(p.id, { stock: newStock }, null, { ...options, new: true });
    })

    await Promise.all(decrementStock);
    
    const totalPrice = products.reduce((acc, product) => acc + (product.quantity * product.price), 0);
    sale.total_price = totalPrice;
    
    await session.commitTransaction();
    return saleModel.create(sale);
  } catch (error) {
    console.log(error.message)
    await session.abortTransaction();
  }
}
const getSales = async () => saleModel.find({});

export { insertSale, getSales }