// backend/middleware/auth.js
const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

const admin = (req, res, next) => {
  if (req.user.role !== "admin") return res.status(403).json({ message: "Admin access only" });
  next();
};

module.exports = { protect, admin };

