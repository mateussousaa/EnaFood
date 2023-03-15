import saleModel from "../models/Sale";

const insertSale = async (sale) => saleModel.create(sale);

export { insertSale }