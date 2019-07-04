const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/login',{
    useNewUrlParser:true,
    useCreateIndex:true
})

mongoose.connection.once('open',function(){
    console.log('connection has been made')
}).on('error',function(error){
    console.log('connection error',error)
})