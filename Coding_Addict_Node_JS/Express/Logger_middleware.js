const logger=(request,response,next)=>{
    console.log(request.url)
    console.log(request.method)
    console.log('Welcome to the Logger Middleware')
    next()
}

module.exports=logger