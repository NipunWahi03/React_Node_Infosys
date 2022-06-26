const Task = require("../Models/taskModels");
const AsyncWrapper = require("../Middlewares/AsyncWrapper");
const {
  CreateNewCustomErrorObject,
} = require("../ErrorClass/CustomErrorClass");

//All controllers without refactoring the code using a normal straight forward approach

// const getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find({}); //It will return all the documents, if we pass the empty object in the find method
//     res.status(200).json({ success: true, data: tasks });
//   } catch (error) {
//     res.json(404).json({ msg: "No Tasks Available" });
//   }
// };

// const getOneTask = async (req, res) => {
//   try {
//     const taskID = req.params.id;
//     const task = await Task.findOne({ _id: taskID });
//     if (!task) {
//       return res.status(404).json({ msg: "No Task exists with such an ID" });
//     }
//     res.status(200).json({ success: true, data: task });
//   } catch (error) {
//     return res.status(500).json({ success: false, msg: error });
//   }
// };
// const addNewTask = async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(201).json({ success: true, data: task });
//   } catch (error) {
//     res.status(500).json({ success: false, msg: error });
//   }
// };

// const updateTask = async (req, res) => {
//   try {
//     const TaskID = req.params.id;
//     const task = await Task.findOneAndUpdate({ _id: TaskID }, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!task) {
//       return res
//         .status(404)
//         .json({ msg: "No Task exists for the mentioned ID" });
//     }
//     return res.status(200).json({ success: true, data: task });
//   } catch (error) {
//     return res.status(500).json({ success: false, msg: error });
//   }
// };

// const deteleTask = async (req, res) => {
//   try {
//     const TaskID = req.params.id;
//     const tasks = await Task.findOneAndDelete({ _id: TaskID });
//     if (!tasks) {
//       return res
//         .status(404)
//         .json({ msg: "No Task available with the requested ID" });
//     }
//     return res.status(200).json({ success: true, data: tasks });
//   } catch (error) {
//     res.status(500).json({ success: false, msg: error });
//   }
// };

//All Controllers after refactoring the code using Async Wrapper, next and CustomErrorHandling of Errors
const getAllTasks = AsyncWrapper(async (req, res) => {
  const tasks = await Task.find({}); //It will return all the documents, if we pass the empty object in the find method
  res.status(200).json({ success: true, data: tasks });
});

const getOneTask = AsyncWrapper(async (req, res, next) => {
  const taskID = req.params.id;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    //Creating a new CustomErrorClass object and pasing it to the next middleware to handle the error using next
    return next(
      CreateNewCustomErrorObject("No Task exists with such an ID", 404)
    );
  }
  res.status(200).json({ success: true, data: task });
});

const addNewTask = AsyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ success: true, data: task });
});

const updateTask = AsyncWrapper(async (req, res, next) => {
  const TaskID = req.params.id;
  const task = await Task.findOneAndUpdate({ _id: TaskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    //Creating a new CustomErrorClass object and pasing it to the next middleware to handle the error using next
    return next(
      CreateNewCustomErrorObject("No Task exists for the mentioned ID", 404)
    );
  }
  return res.status(200).json({ success: true, data: task });
});

const deteleTask = AsyncWrapper(async (req, res, next) => {
  const TaskID = req.params.id;
  const tasks = await Task.findOneAndDelete({ _id: TaskID });
  if (!tasks) {
    //Creating a new CustomErrorClass object and pasing it to the next middleware to handle the error using next
    return next(
      CreateNewCustomErrorObject("No Task available with the requested ID", 404)
    );
  }
  return res.status(200).json({ success: true, data: tasks });
});

module.exports = {
  getAllTasks,
  addNewTask,
  updateTask,
  deteleTask,
  getOneTask,
};
