const { readFile, writeFile } = require("fs");

//For using the Promises Approach, we will make use of the function, which will receive the path of the file as an argument.
const get_file_data = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

//Calling of the function
get_file_data("./content/first.txt")
  .then((result) => {
    console.log(result);
    get_file_data("./content/second.txt")
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
