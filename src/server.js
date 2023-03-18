import { app } from './app.js';
import { connectToDB } from './database/connections.js';
import productModel from './models/Product.js';
import { productSeeder } from './utils/productSeeder.js';

connectToDB()
  .then(() => {
    app.listen(3001, () => {
      console.log('using the port 3001 to Enafood API');
      productModel.find({}).then((result) => {
        if(!result.length) productModel.insertMany(productSeeder);
      });
    });
  })
  .catch((e) => {
    console.log('connection error with DB\n');
    console.log(e);
  });
