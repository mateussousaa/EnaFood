import userModel from "../models/User.js";
import md5 from "md5";

const insertUser = async (user) => {
  const findedUser = await userModel.find({ email: user.email });
  if(findedUser.length) {
    throw new Error('user already exists')
  }
  const userCreated = await userModel.create({
    ...user,
    password: md5(user.password)
  });
  userCreated.password = undefined;
  return userCreated
}
const getUsers = async () => userModel.find({});

const getUserById = async (id) => userModel.findById(id)

export { insertUser, getUsers, getUserById }