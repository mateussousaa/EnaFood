import 'dotenv/config';
import mongoose from "mongoose";

const uri = `mongodb://${process.env.IP_ADDRESS}/${process.env.DB_DATABASE}`;

const connectToDB = () => mongoose.connect(uri);

export { connectToDB }