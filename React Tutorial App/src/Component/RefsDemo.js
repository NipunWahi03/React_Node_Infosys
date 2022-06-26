import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.textRef = React.createRef(); //First Approact to create a ref property (Mostly used) 1st step
    this.getElementData = this.getElementData.bind(this);
    this.cbRef = null; //Second Approach Using a Callback Ref- 1st step.
    this.cbRefMethod = (element) => {
      this.cbRef = element; //Second Approach to assign the element to the property created in the 1st step
    };
  }

  componentDidMount() {
    //this.textRef.current.focus() //Approach 1-Calling the focus method -Step 3
    if (this.cbRef) {
      this.cbRef.focus(); //Approach 2-Calling the focus method- Step 4
    }
  }

  getElementData() {
    alert(`The value in the input field is ${this.textRef.current.value}`); //To fetch the value from the elememtn using 1st approach.
    alert(`The value in the input field is ${this.cbRef.value}`); //To fetch the value from the element using 2nd approach.
  }
  render() {
    return (
      <div>
        <label>Enter the Username:</label>
        <input type="text" ref={this.textRef}></input>
        {/*  1st approach-attaching the new ref property to the element using the ref keyword -2nd step*/}
        <input type="text" ref={this.cbRefMethod}></input>
        {/*  2nd approach-attaching the new ref property to the element using the ref keyword -3rd step*/}
        <button onClick={this.getElementData}>
          Click to fetch the data from the Text field
        </button>
      </div>
    );
  }
}

export default RefsDemo;
