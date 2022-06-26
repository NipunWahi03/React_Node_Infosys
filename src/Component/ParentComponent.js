import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            parentName:'Parent'
        }

        this.greetParent=this.greetParent.bind(this)
    }

    greetParent(ChildProp){
        alert(`Hello you are in the component named as ${this.state.parentName} from ${ChildProp}`)
    }

    render() {
        return (
            <div>
               {/* <button onClick={this.greetParent}>Click to View the Alert.</button> */}
               <ChildComponent greetParentProp={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent

//Like we pass the arguments from Parent Component to Child component, we can also pass the props from child component to Parent component. For this,we need to pass the method as a prop from the parent component to the child component
//Syntax to pass the method as a prop to the Child component:
{/* <ChildComponent greetParentProp={this.greetParent}/>
Note we pass the greetParent as the name of the function and without any parenthesis, we pass the reference of the function in the prop named as greetParentProp.

We need to bind the function so that it will render the component again otherwise it will throw the error as cannot read property of undefined and the explaination of this is in the file named as "Event binding.js".

Then in Child component, we receive the method prop as an object and then call the method like a normal method  and we can pass any number of props to the parent method.
    
To pass the prop from Child Component to the Parent Component, the simple way to pass the prop from child to parent is using the Arrow function. */}