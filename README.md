# Activity Booking Backend API 🚀

## Overview
A RESTful backend service for booking activities like sports events, movies, and more. Built with Node.js, Express.js, and MongoDB.

## Features
✅ User Authentication – Register & login with JWT-based authentication
✅ Activity Management – Create and fetch available activities
✅ Booking System – Users can book activities seamlessly
✅ Database Integration – MongoDB for scalable storage
✅ API Testing – Fully testable via Postman

# Tech Stack
- Backend: Node.js with Express.js
- Database: MongoDB & Mongoose
- Authentication: JWT token-based authentication and Password hashing using bcrypt
- Validation: Joi
- API Testing: Postman

## Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME


2️⃣ Install Dependencies
npm install


3️⃣ Configure Environment Variables
Create a .env file and add:
PORT=6500
MONGO_URI=mongodb+srv://yourdbconnectionstring
JWT_SECRET=your_secret_key


4️⃣ Start the Server
npm start


📌 API Endpoints
🔹 Authentication
| Method | Endpoint | Description | 
| POST | /api/auth/signup | Register a new user | 
| POST | /api/auth/login | Login & receive JWT token | 


🔹 Activities
| Method | Endpoint | Description | 
| GET | /api/activity | Get available activities | 
| POST | /api/activity | Create a new activity (Admin only) | 


🔹 Bookings
| Method | Endpoint | Description | 
| POST | /api/booking/:id | Book an activity by ID (Auth required) | 
| GET | /api/auth/bookings | Get logged-in user's booked activities | 


✅ API Testing
Use Postman to test endpoints.
