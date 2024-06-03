const jwt = require('jsonwebtoken');
const secret = "6f8e9dbb5cd73c1d8fe6b0c2a9a4e5d087a2b8a59f5c4e0d2b5a6e7d3c8f9a6b"
const geLogin =(req,res)=>{
   res.render('index')
}

const getHome = (req,res)=>{
    res.render('home',{user:req.user})
}

const user = {
    email:"suku@gmail.com",
    password:"123456"
}

const verifyLogin = (req,res)=>{
    
    const {email,password} = req.body
    if(user.email ==email && user.password == password){
        const payload = {
            name : "sukanya"
        }
       const token =  jwt.sign(payload,secret);
       res.cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true
    });
       console.log(token)
       res.redirect('/')
    }
    
}


module.exports = {
    geLogin,
    verifyLogin,
    getHome
}