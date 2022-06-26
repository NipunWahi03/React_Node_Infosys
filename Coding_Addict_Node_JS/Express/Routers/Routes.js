const express = require("express");
const router = express.Router();
const {
  getFamilyMembers,
  insertFamilyMembers,
  updateFamilyMembers,
  deleteFamilyMembers,
} = require("../Controllers/Family_Members");


//Get Method To fetch the data from the server
router.get("/", getFamilyMembers);

//POST Method to add/insert the data to the server
router.post("/", insertFamilyMembers);

//PUT Method is used to update the value of the data in the server
router.put("/:id", updateFamilyMembers);

//Delete Method is used to delete the Data from the Server
router.delete("/:id", deleteFamilyMembers);

module.exports = router;
