const express = require('express')
require('./db/mongoose')

const app = express()
app.use(express.json())

// app.all('*', function (req, res, next) {
//     res.set('Access-Control-Allow-Origin', '*');
//     res.set('Access-Control-Allow-Credentials', true);
//     res.set('Access-Control-Allow-Methods', 'POST');
//     res.set('Access-Control-Allow-Methods', 'PATCH');
//     res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
//     if ('OPTIONS' == req.method) return res.send(200);
//     next();
//  });
 
 const port = process.env.PORT || 3000

 app.post('/users/login',async (req,res)=>{
    console.log(req.body.email)
    console.log(req.body.password)
    try{
       const user = await User.findByCredentials(req.body.email,req.body.password)
    //    const token = await user.generateAuthToken()
    //    res.send({ user:user.getPublicprofile(),token})
       res.send(user)
      
    }catch(e){
        res.status(400).send()
    }
 })
 app.listen(port,()=>{
     console.log('server is up on port'+port)
 })