//Importing JWT
const jwt = require("jsonwebtoken");
//Importing CustomAPIError Middleware
const { Unauthenticated } = require("../errors");

const AuthenticationMiddleware = (req, res, next) => {
  const token_details = req.headers.authorization;
  if (!token_details || !token_details.startsWith("Bearer")) {
    throw new Unauthenticated(
      "Sorry, you are not authorizes to view the resource"
    );
  }
  splitted_token = token_details.split(" ")[1];
  try {
    const decoded_token = jwt.verify(splitted_token, process.env.JWT_SECRET);
    const { unique_id, username } = decoded_token;
    req.user = { unique_id, username };
    next();
  } catch (error) {
    throw new Unauthenticated(
      "Sorry, you are not authorized to view the resource"
    );
  }
};

module.exports = AuthenticationMiddleware;
