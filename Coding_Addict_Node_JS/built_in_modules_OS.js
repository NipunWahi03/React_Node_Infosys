//Most frequently used in-built modules are:
// 1.OS
// 2.HTTP
// 3.File Systems
// 4.PATH

//Importing module in this file, use require function:
const operating_system=require('os');
//Will give the user information
console.log(operating_system.userInfo());

//Will give the system uptime in seconds
console.log(`The system uptime is :${operating_system.uptime()} seconds`);

//Will give the current details of the operating system
const os_details={
    name:operating_system.type(), //Give the type of os
    release:operating_system.release(), //Give the release version of the OS
    total_memory:operating_system.totalmem(), //Gives the total memory available in bytes as an integer
    available_memory:operating_system.freemem() //Gives the free memory available in bytes as an integer
}

console.log(os_details)