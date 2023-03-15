import * as userService from '../services/userService.js'

const insertUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const insertedUser = userService.insertUser({
      name, email, password
    })
    res.status(201).json({ user: insertedUser });
  } catch (error) {
    res.status(500).json({ error })
  }
}

export { insertUser }