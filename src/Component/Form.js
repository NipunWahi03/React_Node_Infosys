import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:'',
             comments:''
        }
        //Event Handler Binding to make sure the component takes the parent element as the class itself rather than the windows or undefined.
        this.handleUsernameChange=this.handleUsernameChange.bind(this)
        this.handleCommentChange=this.handleCommentChange.bind(this)
    }


    //Using a Normal Function with binding in the Constructor
    //Event is the by default argument or a prop which is passed by the Input field so that we can store the value of the event happening on change
    //Syntax =event.target.value 
    //Where event is the changes happening in the field,target is the  field targeted and the value which is going to be rerendered into the field.
    handleUsernameChange(event){

        //Changing the state using the setState method
        this.setState({
            username:event.target.value
            
        })
    }

    //Using an Arrow function without binding in the Constructor
    //Event is the by default argument or a prop which is passed by the Input field so that we can store the value of the event happening on change
    //Syntax =event.target.value 
    //Where event is the changes happening in the field,target is the  field targeted and the value which is going to be rerendered into the field.

    //Event is passed as a prop to the arrow funtion which simply returns the data to the handlePasssordChange const.
     handlePasswordChange=event=>( 

        //Changing the state using the setState method
        this.setState({
            password:event.target.value
        })
    )

    //Using a Normal Function with binding in the Constructor
    //Event is the by default argument or a prop which is passed by the Input field so that we can store the value of the event happening on change
    //Syntax =event.target.value 
    //Where event is the changes happening in the field,target is the  field targeted and the value which is going to be rerendered into the field.
    handleCommentChange(event){

        //Changing the state using the setState method
        this.setState({
            comments:event.target.value
        })
    }
    
    render() {
        const {username,password,comments}=this.state  //Destructuring the props for more readibility
        return (
            <div>
                <label>Enter your username:</label>
                <input type="text" value={username} onChange={this.handleUsernameChange}></input><br></br>
                <label>Enter your password:</label>
                <input type="text" value={password} onChange={this.handlePasswordChange}></input><br></br>
                <label>Enter the Comments:</label>
                <textarea value={comments} onChange={this.handleCommentChange}></textarea><br></br>
            </div>
        )
    }
}

export default Form

// 3 steps in the field of form handling:
// Enter the type whether it will be text, textarea, or a select Option
// Then the value will be initially equal to the state of the field defined in the constructor.
// Then the OnChange event which will rerender the component and the value in the field after we enter the data in the field.