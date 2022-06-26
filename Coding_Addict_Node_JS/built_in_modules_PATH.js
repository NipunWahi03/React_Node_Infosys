const path = require("path");

//To know about the path seperator
//console.log(path.sep);

//To join the path with seperator:
const file_path = console.log(path.join("/content", "subfolder", "test.txt"));
console.log(file_path);

//To get the basename of the path file
const base = path.basename(file_path);
console.log(base);
