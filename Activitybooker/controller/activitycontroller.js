const Activity=require('../models/activityschema');


exports.getactivity=async (req,res,next)=>{
  try {
    const activities = await Activity.find();
    res.status(200).json({ success: true, activities });
} catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
}
}
exports.postactivity=async (req,res,next)=>{
  try {
    const activitydata= req.body;
    const newActivity = new Activity(activitydata);

   savedactivity = await newActivity.save();
    res.status(201).json({ success: true}, {savedactivity});
} catch (error) {
    res.status(500).json({ success: false, message: 'Error creating activity' });
}
}







