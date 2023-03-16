import * as saleService from '../services/saleService.js'

const insertSale = async (req, res) => {
  try {
    const { userId, products, delivery_address,
      delivery_number, payment } = req.body;
    
    const insertedSale = await saleService.insertSale({ 
      userId, products, delivery_address, delivery_number, payment
    });

    return res.status(201).json({ sale: insertedSale });
  } catch(error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

const getSales = async (req, res) => {
  try {
    const products = await saleService.getSales();
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ error })
  }
}

export { insertSale, getSales };