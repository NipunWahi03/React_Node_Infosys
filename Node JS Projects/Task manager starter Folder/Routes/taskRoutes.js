const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  addNewTask,
  updateTask,
  deteleTask,
  getOneTask,
} = require("../Controllers/taskController");

router.get("/", getAllTasks);

router.post("/", addNewTask);

router.get("/:id", getOneTask);

router.patch("/:id", updateTask);

router.delete("/:id", deteleTask);

module.exports = router;
