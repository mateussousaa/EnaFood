import * as jwt from '../utils/jwt.js';

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res
      .status(401)
      .json({ message: 'Token not found' }); 
  }

  const { type, message } = jwt.validateToken(authorization);
  if (type) {
    return res
      .status(401)
      .json({ message });
  }

  req.user = message;
  next();
};

export { authMiddleware };