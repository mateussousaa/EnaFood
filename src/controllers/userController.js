import * as userService from '../services/userService.js';

const insertUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const insertedUser = await userService.insertUser({
      name, email, password,
    });
    return res.status(201).json({ user: insertedUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export { insertUser, getUsers, getUserById };