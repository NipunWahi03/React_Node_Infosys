const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the name value"],
    trim: true,
    maxlength: [20, "Name cannot be more than 20 characters"],
    minlength: [3, "Name cannot be less than 3 characters"],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", TaskSchema);
