import jwt from "jsonwebtoken";
import 'dotenv/config';

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET || 'jwt_secret', {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return token;
};

const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET || 'jwt_secret');
    return { type: null, message: data };
  } catch (e) {
    return { type: 'INVALID_TOKEN', message: 'Expired or invalid token' };
  }
};

export { createToken, validateToken };