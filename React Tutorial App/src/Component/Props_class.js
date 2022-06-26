import React, { Component } from "react";

class Props_class extends Component {
  render() {
    return (
      <div>
        <p>You are within the props_class</p>
        <h1>
          Hello {this.props.name} and superhero {this.props.superHero}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

//Always use th syntax in render() method in stateful class component to destructuring the props:

// class Props_class extends Component{
//     render()
//     {
//         const {name,superHero}=this.props
//         const{state1,state2}=this.state //To destructure the State in statefull class component.
//         return(
//             <div>
//                 <p>You are within the props_class</p>
//                 <h1>Hello {name} and superhero {superHero}</h1>
//                 {this.props.children}
//             </div>
//         )
//     }
// }
export default Props_class;
