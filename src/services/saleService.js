import saleModel from "../models/Sale.js";
import userModel from "../models/User.js"
import productModel from "../models/Product.js"

const insertSale = async (sale) => {
  const findedUser = await userModel.findById(sale.userId);
  if(!findedUser) throw new Error('invalid userId');

  sale.total_price = 0;
  sale.products = [];
  
  const createdSale = await saleModel.create({ ...sale, status: 'pending'});
  
  return createdSale;
}

const insertProductToSale = async (saleId, product) => {
  const findedProduct = await productModel.findById(product.productId);

  if(!findedProduct) throw new Error('invalid productId');

  if(findedProduct.stock < product.quantity) throw new Error('stock with available product less than quantity');

  return saleModel.findByIdAndUpdate(
    saleId,
    { total_price: product.quantity * product.price },
    { new: true }
  );
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

export { 
  insertSale,
  insertProductToSale,
  getSales,
  getSaleById,
  updateSale,
  prepareSale,
  concludeSale
}