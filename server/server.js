require('dotenv').config();  

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routers/contactRoutes');
const db = require('./db');

const app = express();

const port = process.env.PORT || 5000;  
const corsOrigin = process.env.CORS_ORIGIN || '*';  

app.use(cors({ origin: corsOrigin }));  
app.use(bodyParser.json());

db.connect();

app.use('/contacts', contactRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
