// src/db.js
const mongoose = require('mongoose');

const connect = () => {
  const mongoUri = process.env.MONGO_URI;  
  if (!mongoUri) {
    console.error("Mongo URI is not defined in environment variables.");
    process.exit(1); 
  }

  mongoose.connect(mongoUri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));
};

module.exports = { connect };
