import saleModel from "../models/Sale.js";

const insertSale = async (sale) => saleModel.create(sale);

const getSales = async () => saleModel.find({});

export { insertSale, getSales }