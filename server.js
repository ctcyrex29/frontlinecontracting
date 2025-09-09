// server.js
const express = require('express');
const keep_alive = require ('./keep_alive.js');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const db = require('./db'); // SQLite database connection
const adminAuthRouter = require('./admin/admin-auth');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Admin authentication API
app.use('/api/admin', adminAuthRouter);

// Serve static files (HTML, CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'resources')));
app.use(express.static(__dirname));

// API to list all images in resources folder
app.get('/api/resources', (req, res) => {
  const resourcesDir = path.join(__dirname, 'resources');
  fs.readdir(resourcesDir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Unable to list resources' });
    const images = files.filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
    res.json(images);
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
