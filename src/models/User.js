import mongoose from "mongoose";

const { Schema, Model }= mongoose

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  }
}, { timestamps: true })

const userModel = new Model('User', userSchema)

export default userModel;