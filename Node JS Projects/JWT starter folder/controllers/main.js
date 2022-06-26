const { BadRequest } = require("../errors");
//Importing jsonwebtoken package to use the methods of jwt
const jwt = require("jsonwebtoken");

//Will check in the controller itself if the username or password is provided
//If the username and password are provided, will now create the JWT i.e JSON Web Token
//Will create the JWT, we will be using jwt.sign method
//Just a Demo id to be used in the payload of JWT, otherwise will use the id from the Database which will be automatically unique for each document

//Syntax to create a JWT-
//sign is the method to call to create a JWT token
//sign method will take 3 parameters i.e payload, a jwt secret key and the options
//make sure to have the payload as short as possible otherwise it will too much time to decode and the suer experience will not be as per the expectations.
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequest("Please provide the required username and password");
  }
  const unique_id = new Date().getDate();
  const token = jwt.sign({ unique_id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({
    msg: `Hello You are in Login function and the username is :${username} and the password is :${password} `,
    token,
  });
};

const getDashboardDetails = async (req, res) => {
  const number = Math.floor(Math.random() * 100);
  res.send(
    `Hello, you are in Dashboard Details Function, username is ${req.user.username} and your random number is ${number}.`
  );
};

module.exports = {
  getDashboardDetails,
  login,
};
