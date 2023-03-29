const jwt = require('jsonwebtoken');
require('dotenv').config();
const secert = process.env.JWT_SECRET;
const expiresIn = process.env.JWT_EXPIRES_IN;

exports.sign = (payload) => {
  return jwt.sign(payload, secert, { expiresIn });
};

exports.verify = (token) => {
  try {
    return jwt.verify(token, secert);
  } catch (e) {
    return false;
  }
};
