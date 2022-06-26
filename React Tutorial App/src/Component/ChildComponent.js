import React, { Component } from "react";

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.greetParentProp("Children")}>
          Click on this button to call a method of Parent Component
        </button>
      </div>
    );
  }
}

export default ChildComponent;
