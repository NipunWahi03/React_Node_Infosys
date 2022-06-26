import React, { Component } from "react";

class EventBinding extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello you are in event Binding class.",
    };
    //this.clickHandler = this.clickHandler.bind(this); //Binding the this keyword in the constructor itself rather than in the render method as in this case the binding will be done ony once and not always the render method will run as it will create a performance issues. This is basically a react official documentation event binding which react expect us to follow to do event binding.
  }

  clickHandler = () => {
    this.setState({
      message: "You are inside the clickHandler Function",
    });
    console.log(this);
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}> Click to change the Event Handler</button> Using 1st approact for event binding i.e bind method */}
        {/* <button onClick={() => this.clickHandler()}>
          {" "}
          Click to change the Event Handler
        </button>{" "} */}
        {/* Using 2nd approact for event binding i.e using arrow function */}
        <button onClick={this.clickHandler}>
          {" "}
          Click to change the Event Handler
        </button>{" "}
        {/*Using 3rd approact for event binding i.e doing binding in constructor rather than in render() method*/}
      </div>
    );
  }
}

export default EventBinding;

//Why does this return the undefined in case of 1st approach if we call the function i.e clickHandler() method using the simple syntax as :
{
  /* <button onClick={this.clickHandler}></button>

First of all "this" keyword points the Parent element on which it is called . So when you use a Named function with the "this" keyword inside it  , it isn't binded to anything at all ..So the control passes to the "Window" element . So the Window element acts as a parent to the Named function . We see "Undefined" here because we use "Strict mode " in Javascript . What Strict Mode does is, if there is a named function( without any Bind method ) it transfers control to the parent element(window element) as i said ..this action is blocked by the strict mode ..So you see "undefined" in there ...However if you take off the strict mode ,you should see it will return the Window object ... The One Stop Solution to all of this is using arrow functions which takes parent element as the Class and not the window object . */
}
