const User=require('../models/userchema');
const Booking=require('../models/bookingschema');
const {jwtauthmiddleware,generatejwt}=require('../middlewares/jwt');

exports.postuserlogin=async (req,res,next)=>{
 try{
  const {email,password}=req.body;
  const user=await User.findOne({email:email})
  if(!user || !(await user.comparePassword(password))){
    return res.status(403).json({message:'Invalid Credentials',success:false});
  }
  const payload={
    id:user._id,
    email:user.email
  };
  const token=generatejwt(payload)
  res.status(200).json({message:'login successful',success:true,token:token});

 }
 catch(err){
  console.log(err);
res.status(500).json({message:'internal server error',err});
 }
}
exports.postusersignup=async (req,res,next)=>{
 try{
  const data=req.body;
const {email}=req.body;
const user=await User.findOne({email:email})
if(user){
  return res.status(409).json({message:'user already exists'});
}
const newuser=new User(data);
const saveduser=await newuser.save();

return res.status(201).json({message:'user created successfully',success:true});


 }
 catch(err){
  console.log(err);
res.status(500).json({message:'internal server error',err});
 }
}

exports.postbookactivity= async (req, res,next) => {
  try {
      const activityid = req.params.id; 
      const userid = req.user.id; 
      console.log(activityid)
      console.log(userid)
      if (!activityid) {
          return res.status(400).json({ success: false, message: 'Activity ID is required' });
      }

      const newBooking = new Booking({ userid, activityid });
      bookedactivity=await newBooking.save();

     
      const user = await User.findByIdAndUpdate(
        userid, 
        { $push: { bookings: bookedactivity._id } }, 
        { new: true }
    );
      await user.save();

      res.status(201).json({ success: true, booking: bookedactivity });
  } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'Error booking activity'
      });
    }};

exports.getuserbookings = async (req, res,next) => {
  try {
      const userid = req.user.id; 

      const bookings = await Booking.find( {userid} ).populate('activityid'); 

      res.status(200).json({ success: true, bookings });
  } catch (error) {
      res.status(500).json({ success: false, message: 'Error retrieving bookings' });
  }
};


    