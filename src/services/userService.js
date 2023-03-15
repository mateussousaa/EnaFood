import userModel from "../models/User.js";

const insertUser = async (user) => userModel.create(user);

const getUsers = async () => userModel.find({});

const getUserById = async (id) => userModel.findById(id)

export { insertUser, getUsers, getUserById }