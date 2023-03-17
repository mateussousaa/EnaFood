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

  const totalPrice = products.reduce((acc, product) => {
    const findedProduct = resultProducts.find((p) => p.id === product.productId);
    product.price = findedProduct.price;
    return acc + findedProduct.price * product.quantity;
  }, 0);
  
  sale.total_price = totalPrice;
  
  const createdSale = await saleModel.create({ ...sale, status: 'pending'});
  
  return createdSale;
}

const getSales = async () => saleModel.find({});

const getSaleById = async (id) => saleModel.findById(id)

const updateSale = async (id, newSale) => {
  const findedSale = await saleModel.findById(id);
  if(findedSale.status !== 'pending') throw new Error('the sale was closed');

  // old sale products go back to stock
  const { products } = findedSale;

  await Promise.all(
    products.map(async (p) => productModel.findByIdAndUpdate(p.productId, { stock: this.stock + p.quantity }))
  )

  // await saleModel.findByIdAndUpdate(id, sale, { new: true })
  return newSale;
}

const prepareSale = async (id) => saleModel.findByIdAndUpdate(id, { status: 'preparing' }, { new: true })

const concludeSale = async (id) => saleModel.findByIdAndUpdate(id, { status: 'conclude' }, { new: true })

export { insertSale, getSales, getSaleById, updateSale, prepareSale, concludeSale }