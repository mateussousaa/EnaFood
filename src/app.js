import express from "express";
import 'express-async-errors';
import mainRouter from "./routes/mainRouter.js";

const app = express();

app.use(express.json());

app.use(mainRouter);

export { app };