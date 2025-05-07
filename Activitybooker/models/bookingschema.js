const mongoose = require('mongoose');

const bookingschema = new mongoose.Schema({
    userid: 
    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    activityid: 
    { type: mongoose.Schema.Types.ObjectId, ref: 'Activity', required: true },
    bookedAt: 
    { type: Date, default: Date.now }
});

const Booking= mongoose.model('Booking', bookingschema,'Bookings');
module.exports =Booking;