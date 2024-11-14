// src/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routers/contactRoutes');
const db = require('./db');

const app = express();
const port = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
db.connect();

// Routes
app.use('/contacts', contactRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
