exports.authenticateUser=function(username,password){
    if(username=='admin' && password=='admin'){
        return "Valid User. Logged in Successfully"
    }
    else{
        return "Invalid User. Please try again with correct credentials."
    }
}