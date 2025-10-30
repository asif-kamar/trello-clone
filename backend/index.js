// load env variables
require('dotenv').config(); //make sure this line is on the top

//import dependancies
const express = require('express');
const cors = require('cors');

//import db connection
const db = require('./db/db')

//creating express app
const app = express();
app.use(cors()); //enabling cors for frontend
app.use(express.json()); // json parser

// connection test
app.get('/test-db', async (req, res) => {
  try {
    // Run a simple query to get the current time from the DB
    const { rows } = await db.query('SELECT NOW()');
    
    // If it works, send a success message
    res.json({
      message: 'Database connection successful!',
      time: rows[0].now,
    });
  } catch (err) {
    // If it fails, send an error
    console.error('Database connection error:', err);
    res.status(500).json({ error: 'Failed to connect to database.' });
  }
});

// starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});

