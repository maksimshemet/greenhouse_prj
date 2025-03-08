const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const cors = require('cors');  // Add this line - you'll need to install this package

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'orders');

// CORS Middleware - Add this before other middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:5173'], // Add your frontend URLs here
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Middleware
app.use(bodyParser.json());

// Ensure data directory exists
async function ensureDataDirExists() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    console.log(`Orders directory created at ${DATA_DIR}`);
  } catch (err) {
    console.error('Error creating orders directory:', err);
    process.exit(1);
  }
}

// Create a new order - store whatever is sent in the request
app.post('/api/orders', async (req, res) => {
  try {
    const orderData = req.body;
    orderData.date = new Date().toISOString();
    // Generate a unique ID for the filename
    const id = uuidv4();
    const filename = `${id}.json`;
    const filePath = path.join(DATA_DIR, filename);
    
    // Write the request body directly to file
    await fs.writeFile(
      filePath,
      JSON.stringify(orderData, null, 2)
    );
    
    res.status(201).json({ 
      message: 'Order saved successfully',
      orderId: id,
      filePath: filePath
    });
  } catch (err) {
    console.error('Error saving order:', err);
    res.status(500).json({ error: 'Failed to save order' });
  }
});

// Start the server
async function startServer() {
  await ensureDataDirExists();
  
  app.listen(PORT, () => {
    console.log(`Order storage service running on port ${PORT}`);
    console.log(`Orders being stored in ${DATA_DIR}`);
    console.log(`CORS enabled for frontend applications`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

module.exports = app;