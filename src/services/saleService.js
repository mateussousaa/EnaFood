import saleModel from "../models/Sale";

const insertSale = async (sale) => saleModel.create(sale);

const getSales = async () => saleModel.find({});

export { insertSale, getSales }