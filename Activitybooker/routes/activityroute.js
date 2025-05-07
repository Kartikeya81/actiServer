const express=require('express');
const activityrouter=express.Router();
const {jwtauthmiddleware}=require('../middlewares/jwt');
const {getactivity,postactivity}=require('../controller/activitycontroller');

activityrouter.get('/api/activity/',jwtauthmiddleware,getactivity);//api/activity
activityrouter.post('/api/activity/',jwtauthmiddleware,postactivity);//api/activity/

module.exports=activityrouter