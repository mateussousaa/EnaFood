import userModel from "../models/User";

const insertUser = async (user) => userModel.create(user);

export { insertUser }