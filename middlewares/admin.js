const User = require("../models/User");

exports.check = async (req, res, next) => {
  const user = await User.findById(req.userId);
  user.isAdimn ? next() : res.status(403).json({ massage: "Forbidden" });
};
