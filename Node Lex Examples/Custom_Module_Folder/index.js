//exports is an object and authenticateUser is the function name which will be used to call from the main module i.e Using_custom_module.js
exports.authenticateUser=function(username,password){
    if(username=='admin' && password=='admin'){
            return "Valid User"
    }
    else{
        return "Invalid User, try again."
    }
}