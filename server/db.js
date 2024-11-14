// src/db.js
const mongoose = require('mongoose');

const connect = () => {
  mongoose.connect('mongodb://localhost:27017/pp', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
};

module.exports = { connect };
