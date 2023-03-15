import * as saleService from '../services/saleService.js'

const insertSale = async (req, res) => {
  try {
    const { userId, products, total_price,
      delivery_address, delivery_number } = req.body;
    const insertedSale = await saleService.insertSale({ 
      userId, products, total_price,
      delivery_address, delivery_number 
    });

    res.status(201).json({ sale: insertedSale });
  } catch(error) {
    res.status(500).json({ error })
  }
}

const getSales = async (req, res) => {
  try {
    const products = await saleService.getSales();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error })
  }
}

export { insertSale, getSales };