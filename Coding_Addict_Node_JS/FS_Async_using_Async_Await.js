//Approach 1::
//const {readFile,writeFile}=require('fs')
//One Approach is to write the function yourself to fetch the values from the file by using the async readFile and writeFile functions of the async fs module.
// const get_file_data = (path) => {
//     return new Promise((resolve, reject) => {
//       readFile(path, "utf-8", (error, data) => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(data);
//         }
//       });
//     });
//   };

//Async function waiting for the promise to be settled to perform the tasks
// const fetch_file_data=async ()=>{
//   const first=await get_file_data('./content/first.txt');
//   const second=await get_file_data('./content/Second.txt');
//   console.log(`The details in the files fetched are as follows:${first} and ${second}`)
//   //console.log(first);
// }

//Approach 2::
//Another Approach is to use the utils module
//const {readFile,writeFile}=require('fs')
// const util=require('util');
// const readFilePromise=util.promisify(readFile);
// const writeFilePromise=util.promisify(writeFile);

// //Async function waiting for the promise to be settled to perform the tasks
// const fetch_file_data=async ()=>{
//     const first=await readFilePromise('./content/first.txt','utf-8');
//     const second=await readFilePromise('./content/Second.txt','utf-8');
//     console.log(`The details in the files fetched are as follows:${first} and ${second}`)
//     //console.log(first);
// }

//Approach 3::
//Another Approach is to use the fs module with promises
const { readFile, writeFile } = require("fs").promises;
const fetch_file_data = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/Second.txt", "utf-8");
    await writeFile(
      "./content/FS_Async_Using_Async_Await_Result",
      `The details in the files fetched are as follows:${first} and ${second}`
    );
  } catch (error) {
    console.log(error);
  }

  //console.log(first);
};

//Function Call
fetch_file_data();
