import * as userService from '../services/userService.js';

const insertUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const token = await userService.insertUser({
      name, email, password,
    });
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await userService.login({ email, password });
    
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    return res.status(200).json({ users });
  } catch (error) {
    console.log(error)
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

export { insertUser, login, getUsers, getUserById };