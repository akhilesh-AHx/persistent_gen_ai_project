// src/server.js
const express = require('express');
const path = require('path');
const {findBestCar,findOpinion} = require('./generativeAI');

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname)));
app.use(express.json());

// Route for the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to handle the user query
app.post('/api/get-car', async (req, res) => {
  const userQuery = req.body.query;
  
  const bestCar = await findBestCar(userQuery);
  
  
  if (bestCar) {
    res.json(bestCar);
  } else {
    res.status(404).json({ error: 'No matching car found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
