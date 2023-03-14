import mongoose from "mongoose";

const { Schema, Model }= mongoose

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  stock: Number
})

const productModel = new Model('Product', productSchema)

export default productModel;