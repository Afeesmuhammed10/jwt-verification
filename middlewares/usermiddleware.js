const jwt = require('jsonwebtoken');
const secret = "6f8e9dbb5cd73c1d8fe6b0c2a9a4e5d087a2b8a59f5c4e0d2b5a6e7d3c8f9a6b"

const verifyUser = (req,res,next)=>{
    let token = req.cookies.token
    if(token){
        jwt.verify(token,secret,(err,decode)=>{
            if(err){
                console.log(err);
                res.redirect('/login')
            }else{
                req.user = decode.name
                next()
            }
        })
    }else{
        res.redirect('/login')
    }
   
}

module.exports = {
    verifyUser
}