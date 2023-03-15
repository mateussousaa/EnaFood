import mongoose from "mongoose";

const { Schema } = mongoose;

const saleSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{
    productId: {
      type: Schema.Types.ObjectId, ref: 'Product'
    },
    quantity: Number,
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
  },
  payment: {
    type: String,
    required: true,
  }
});

const saleModel = new mongoose.model('Sale', saleSchema);

export default saleModel;