import userModel from "../models/User.js";

const insertUser = async (user) => {
  const findedUser = await userModel.find({ email: user.email });
  if(findedUser.length) {
    throw new Error('user already exists')
  }
  return userModel.create(user);
}
const getUsers = async () => userModel.find({});

const getUserById = async (id) => userModel.findById(id)

export { insertUser, getUsers, getUserById }