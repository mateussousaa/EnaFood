import 'dotenv/config';
import mongoose from "mongoose";

const uri = `mongodb://${process.env.DB_ROOT_USERNAME}:${process.env.DB_ROOT_PASSWORD}@localhost:27017/`;

const connectToDB = () => mongoose.connect(uri);

export { connectToDB }