import React from 'react';
//export default Greet; Using Default export
//To use named export, we need to use export keyword before the const keyword of the Arrow function()

// function Greet(){
//     return <h1>Hello Nipun</h1>
// }  //Normal Function syntax

//Syntax of functional component using a Arrow function of ES6

  
export const Greet=()=><h1>Greet Nipun from Functional Component</h1>  //Using An arrow function and using named export in place of default export

//To import the named export in App.js file, the syntax will be using import {_named_export_same_as the name of const} from Location of file
//To import the default export in APp.js file, the syntax will be using import <anyname> from <location of the file> as it will be by default imported.
