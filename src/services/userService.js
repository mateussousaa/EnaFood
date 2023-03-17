import md5 from 'md5';
import userModel from '../models/User.js';
import * as jwt from '../utils/jwt.js'

const insertUser = async (user) => {
  const findedUser = await userModel.find({ email: user.email });
  if (findedUser.length) {
    throw new Error('user already exists');
  }

  const token = jwt.createToken(user);
  await userModel.create({
    ...user,
    password: md5(user.password),
  });

  return token;
};

const login = async ({ email, password }) => {
  const findedUser = await userModel.findOne({ email }).select('+password');
  const passwordEncrypted = md5(password)

  if(!findedUser || passwordEncrypted !== findedUser.password) {
    throw new Error('Invalid fields');
  }

  const token = jwt.createToken({ email, password: md5(password)});
  return token;
}

const getUsers = async () => userModel.find({});

const getUserById = async (id) => userModel.findById(id);

export { insertUser, login, getUsers, getUserById };