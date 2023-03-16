import saleModel from "../models/Sale.js";
import userModel from "../models/User.js"
import productModel from "../models/Product.js"

const insertSale = async (sale) => {
  const findedUser = await userModel.findById(sale.userId);
  if(!findedUser) throw new Error('invalid userId');
  
  const { products } = sale;
  const productsList = products.map(async (p) => productModel.findById(p.productId));
  const resultProducts = await Promise.all(productsList);

  const hasInvalidProductId = resultProducts.some((p) => p === null);
  if(hasInvalidProductId) throw new Error('in the products list has a invalid productId')

  const hasInvalidQuantity = resultProducts.some((p) => {
    const findedProduct = products.find((product) => p.id === product.productId)
    return p.stock < findedProduct.quantity;
  })

  if(hasInvalidQuantity) throw new Error('exists invalid quantity of products');

  const decrementStock = resultProducts.map(async (p) => {
    const findedProduct = products.find((product) => p.id === product.productId);
    const newStock = p.stock - findedProduct.quantity;
    return productModel.findByIdAndUpdate(p.id, { stock: newStock });
  })

  await Promise.all(decrementStock);
  
  const totalPrice = products.reduce((acc, product) => acc + (product.quantity * product.price), 0);
  sale.total_price = totalPrice;
  
  const createdSale = await saleModel.create(sale);
  
  return createdSale;
}
const getSales = async () => saleModel.find({});

export { insertSale, getSales }