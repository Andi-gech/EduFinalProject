const { User } = require("../Model/User");
const { verifyAuthToken } = require("../utils/jwt");

module.exports = async (req, res, next) => {
  // const token = req.headers["authorization"];
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmYyOTgyOWEzNTZlMGYwY2EwYWY5ZTEiLCJlbWFpbCI6ImFuZGlAZ21haWwuY29tIiwiUm9sZSI6InN0dWRlbnQiLCJ1c2VyaWQiOiI2NmYyOTgyYWEzNTZlMGYwY2EwYWY5ZTQiLCJpYXQiOjE3MzExMDA2OTEsImV4cCI6MTczMjgyODY5MX0.MTFaGhxuSwdC3o4IMbj9zDhswmgvJ1OZLQzmcJdmGk0";

  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    const decoded = verifyAuthToken(token);
    const users = await User.findOne({ auth: decoded._id });
    if (!users) return res.status(401).send("Invalid  token");

    req.user = decoded;

    next();
  } catch (err) {
    res.status(401).send("Invalid token");
  }
};
