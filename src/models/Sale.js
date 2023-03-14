import mongoose from "mongoose";

const { Schema, Model } = mongoose;

const saleSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{
    productId: {
      type: Schema.Types.ObjectId, ref: 'Product'
    },
    quantity: Number,
    price: Number
  }],
  total_price: {
    type: Number,
    required: true,
  },
  delivery_address: {
    type: String,
    required: true,
  },
  delivery_number: {
    type: String,
    required: true,
  }
});

const saleModel = new Model('Sale', saleSchema);

export default saleModel;