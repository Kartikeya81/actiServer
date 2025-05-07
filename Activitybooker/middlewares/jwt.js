const User=require('../models/userchema');
const jwt=require('jsonwebtoken');
require('dotenv').config();

const jwtauthmiddleware=async (req,res,next)=>{
  const authorization=req.headers.authorization;
  if(!authorization){
    return res.status(401).json({message:'unauthorized',success:false});
  }
  const token=authorization.split(' ')[1];
  if(!token){
    return res.status(401).json({message:'unauthorized',success:false});
  }
  try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    req.user=user;
    req.userpayload=decoded;
    next();
  }
  catch(err){
    console.log(err);
    return res.status(401).json({message:'unauthorized',success:false});
  }
}

const generatejwt=(userdata)=>{
  return jwt.sign(userdata,process.env.JWT_SECRET,{expiresIn:"1d"})
};

module.exports={
  jwtauthmiddleware,
  generatejwt
};