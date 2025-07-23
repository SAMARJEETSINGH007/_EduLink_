const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/jokesDB');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed', err);
  }
};


module.exports = connectDB;
/*
1. WHY TO USE THE CONFIG FOLDER?
  -used to store the configuration related files that define or 
    handle the environmenet-specific or system level setup. 
  -centralises the database setup etc. 
2. WHY TO USE connectDB VARIABLE?
  -To store the connection to the mongodb and that can be provided or used 
   other files like the server.js or the app.js
*/