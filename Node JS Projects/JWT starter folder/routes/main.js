const express = require("express");
const router = express.Router();
const AuthenticationMiddleware = require("../middleware/auth");

//Importing Controller functions
const { getDashboardDetails, login } = require("../controllers/main");

router.get("/dashboard", AuthenticationMiddleware, getDashboardDetails);
router.post("/login", login);

module.exports = router;
