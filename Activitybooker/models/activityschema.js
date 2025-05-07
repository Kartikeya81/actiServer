const { required } = require('joi');
const mongoose = require('mongoose');

const activityschema = new mongoose.Schema({
    title: 
    { type: String, required: true },
    description:
     { type: String, required: true },
    location:
     { type: String, required: true },
    datetime:
     { type: Date, required: true },
    activityid:
     {type:String,required:true},
});

const Activity= mongoose.model('Activity', activityschema,'Activities');
module.exports= Activity;