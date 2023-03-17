import saleModel from "../models/Sale.js";
import userModel from "../models/User.js"

const insertSale = async (sale) => {
  const findedUser = await userModel.findById(sale.userId);
  if(!findedUser) throw new Error('invalid userId');

  sale.total_price = 0;
  sale.products = [];
  
  const createdSale = await saleModel.create({ ...sale, status: 'pending'});
  
  return createdSale;
}
const getSales = async () => saleModel.find({});

const updateSale = async (id, sale) => {
  const findedSale = await saleModel.findById(id);
  if(findedSale.status !== 'pending') throw new Error('the sale was closed');

  await saleModel.findByIdAndUpdate(id, sale, { new: true })
}

const prepareSale = async (id) => saleModel.findByIdAndUpdate(id, { status: 'preparing' }, { new: true })

const concludeSale = async (id) => saleModel.findByIdAndUpdate(id, { status: 'conclude' }, { new: true })

export { insertSale, getSales, updateSale, prepareSale, concludeSale }
