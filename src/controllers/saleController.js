import * as saleService from '../services/saleService.js'

const insertSale = async (req, res) => {
  try {
    const { userId, delivery_address,
      delivery_number, payment } = req.body;
    
    const insertedSale = await saleService.insertSale({ 
      userId, delivery_address, delivery_number, payment
    });

    return res.status(201).json({ sale: insertedSale });
  } catch(error) {
    return res.status(500).json({ error: error.message })
  }
}

const insertProductToSale = async (req, res) => {
  try {
    const { id } = req.params;
    const { product } = req.body;

    const insertedProduct = await saleService.insertProductToSale(id, product);

    return res.status(201).json({ product: insertedProduct });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

const getSales = async (req, res) => {
  try {
    const sales = await saleService.getSales();
    return res.status(200).json({ sales });
  } catch (error) {
    return res.status(500).json({ error })
  }
}

const getSaleById = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await saleService.getSaleById(id);
    return res.status(200).json({ sale })
  } catch (error) {
    return res.status(500).json({ error})
  }
}

const updateSale = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, delivery_address,
      delivery_number, payment } = req.body;

    const updatedSale = await saleService.updateSale(id, {
      userId, delivery_address, delivery_number, payment
    });

    return res.status(200).json({ sale: updatedSale })
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const prepareSale = async (req, res) => {
  try {
    const { id } = req.params;
    await saleService.prepareSale(id);
    return res.status(200).json({ message: 'preparing'})
  } catch (error) {
    return res.status(500).json({ error })
  }
}

const concludeSale = async (req, res) => {
  try {
    const { id } = req.params;
    await saleService.concludeSale(id);
    return res.status(200).json({ message: 'concluded'})
  } catch (error) {
    return res.status(500).json({ error })
  }
}

export { 
  insertSale,
  insertProductToSale,
  getSales,
  getSaleById,
  updateSale,
  prepareSale,
  concludeSale 
};