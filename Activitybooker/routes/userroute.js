const express=require('express');

const userrouter=express.Router();

const {postuserlogin,postusersignup,getuserbookings,postbookactivity}=require('../controller/usercontroller')
const {signupvalidation,loginvalidation}=require('../middlewares/joivalidation');
const {jwtauthmiddleware}=require('../middlewares/jwt')
userrouter.post('/login',loginvalidation,postuserlogin);//api/auth/login
userrouter.post('/signup',signupvalidation,postusersignup);//api/auth/signup
userrouter.get('/bookings',jwtauthmiddleware,getuserbookings);//api/auth/bookings
userrouter.post('/book/:id',jwtauthmiddleware,postbookactivity);//api/auth/book/:id






module.exports=userrouter;