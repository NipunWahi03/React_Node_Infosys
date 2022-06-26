
//Construtor Function of the exports object
module.exports=function(username,password){
    if(username=='admin'&&password=='admin'){
        return "Valid user"
    }
    else{
        return "Invalid User"
    }
}