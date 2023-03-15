import * as userService from '../services/userService.js'

const insertUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const insertedUser = await userService.insertUser({
      name, email, password
    })
    return res.status(201).json({ user: insertedUser });
  } catch (error) {
    return res.status(500).json({ error })
  }
}

export { insertUser }