const express=require('express');
const db=require('./utils/db');
const body_parser=require('body-parser');
const cors=require('cors');
const userrouter=require('./routes/userroute')
const activityrouter=require('./routes/activityroute')
const {jwtauthmiddleware}=require('./middlewares/jwt');
const app=express();
require('dotenv').config();
app.set('view engine','ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(body_parser.json());
app.use(cors());

app.get('/hi',(req,res,next)=>{
  res.send("Hello");
})
app.get('/api/auth',jwtauthmiddleware,(req,res,next)=>{
  res.status(200).json([{Mobile:'Samsung',Price:20000},{Mobile:'Samsung',Price:20000},{Mobile:'Samsung',Price:20000},{Mobile:'Samsung',Price:20000}])
})
app.use('/api/auth',userrouter);
app.use(activityrouter);


const port= process.env.Port || 6500;


app.listen(port,()=>{
  console.log(`server running at ${port}`)
})

