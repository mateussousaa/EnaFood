import userModel from "../models/User.js";

const insertUser = async (user) => userModel.create(user);

export { insertUser }