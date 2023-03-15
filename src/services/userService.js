import userModel from "../models/User.js";

const insertUser = async (user) => userModel.create(user);

const getUsers = async () => userModel.find({});

export { insertUser, getUsers }