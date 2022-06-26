import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//import Greet from './Component/Greet'; //Import the Default export
import {Greet} from './Component/Greet' //Import the named export, notice the name of the function to be import is as same as the name of the function in the Greet.js
import {Welcome_Nipun} from './Component/Welcome';//Import the named export from statefull class component
//import Welcome_Nipun_From_Class_Component from './Component/Welcome' //Import using default export from the Classfull component
//import Props from './Component/Props';
import Props_class from './Component/Props_class';
import State_message from './Component/State_message';
import EventBinding  from './Component/EventBinding';
import ParentComponent from './Component/ParentComponent';
import Form from './Component/Form';
import RefsDemo from './Component/RefsDemo';

class App extends Component{
  render(){
    return (
      <div>
      {/* <Greet />
      <Welcome_Nipun /> {/*Using the named export to render the data from the file Welcome.js */}
      {/*<Welcome_Nipun_From_Class_Component /> Using the Default export to render the file Welcome.js */}
        {/* <Props name="Nipun Wahi" superHero="Akshay Kumar">
        </Props> */}
        {/* <Props_class name="Palak Wahi" superHero="Akshay Kumar"/> 
        <Props_class name="Mansha Wahi" superHero="Akshay Kumar">
          <br></br>
        <button> Click to Subscribe</button>
        </Props_class> */}
        {/* <Props_class name="Jai Wahi" superHero="Akshay Kumar"/> */}
        {/* <State_message /> */} 
        {/* <EventBinding /> */}
        {/* <ParentComponent /> */}
        {/* <Form /> */}
        <RefsDemo />
      </div>
    );
  }
}

//Props are used to pass the value to the Component as a function parameter
//It is just like the name of the actual argumenets to be passed to the Component and there we can fetch the value using the {props.<name>}.
//Using {} is a syntax in JSX to fetch the data from the props property.
//We can have chilren properties also used with Props like in this case if we want a button to be enable under a one value, we can do it using the {props.children}
export default App;
