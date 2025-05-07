const mongoose=require('mongoose');
require('dotenv').config();
const mongourl=process.env.MONGOURL;

mongoose.connect(mongourl);


const db=mongoose.connection;

db.on('connected',()=>{
  console.log('MongoDB connection established');
})
db.on('disconnected',()=>{
  console.log('MongoDB connection disconnected');
})

module.exports = db;