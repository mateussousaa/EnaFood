import { app } from "./app.js";
import { connectToDB } from "./database/connections.js";

connectToDB()
  .then(() => {
    app.listen(3001, () => console.log('using the port 3001 to Enafood API'));
  })
  .catch((e) => {
    console.log('connection error with DB\n')
    console.log(e)
  })
