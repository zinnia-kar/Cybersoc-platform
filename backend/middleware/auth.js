const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {

  try {
    // 🔐 Get token from headers
    const authHeader = req.headers["authorization"]

    if (!authHeader) {
      return res.status(401).json({ message: "Access denied. No token provided." })
    }

    // (Optional) support "Bearer <token>" format
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader

    // 🔑 Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // 🧠 Attach user data to request
    req.user = decoded

    next()

  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token." })
  }
}

module.exports = authMiddleware