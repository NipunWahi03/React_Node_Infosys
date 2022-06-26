import React from 'react';
const Props=props=><h1>Hello {props.name} from Props Example and the superhero name is {props.superHero}{props.children }</h1>


//Using {props.name},{props.superHero}, {props.children} to fetch the values passed to a function
//Destructuring props:
//1st method:Destructuring in the Function parameters 
//Syntax:
// const Props=({name,superHero})=>{
//     return(
//         <h1>Hello {name} from Props Example and the superhero name is {superHero}</h1>
//     )

// }
//2nd method:Destructuring in the Function body 
//Syntax:
// const Props=(props)=>{
//     const{name,superHero}=props
//     return(
//         <h1>Hello {name} from Props Example and the superhero name is {superHero}</h1>
//     )

// 

export default Props;