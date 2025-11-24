/*
  Backend Server Entry Point
  Run with: node server/index.js
*/
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy Auth Middleware
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

// --- ROUTES ---

// Auth Route
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  // Mock Check
  if (email === 'admin@rudra.com' && password === 'admin123') {
    const token = jwt.sign({ _id: '1', email }, process.env.JWT_SECRET || 'secret');
    return res.json({ token, user: { name: 'Rudra Admin' } });
  }
  return res.status(400).json({ message: 'Invalid Credentials' });
});

// Contact Route
app.post('/api/contact', (req, res) => {
  const data = req.body;
  console.log('Received Contact Form:', data);
  // Ideally save to DB here using models/Contact.js
  return res.json({ success: true, message: 'Message Received Successfully' });
});

// Admin Stats
app.get('/api/admin/stats', verifyToken, (req, res) => {
  res.json({
    visits: 12500,
    messages: 45,
    projects: 12,
    conversionRate: '3.2%'
  });
});

// Admin Messages
app.get('/api/admin/messages', verifyToken, (req, res) => {
  res.json([
    { _id: '1', name: 'John Doe', email: 'john@tech.com', service: 'Full Stack', budget: '$5k+', details: 'Need a SaaS platform.', date: new Date().toISOString() },
    { _id: '2', name: 'Sarah Lee', email: 'sarah@vlog.com', service: 'Video Editing', budget: '$1k-3k', details: 'Editing for YouTube channel.', date: new Date(Date.now() - 86400000).toISOString() },
  ]);
});

// Public Data Routes (For Dynamic Fetching)
// In a real app, these would query MongoDB
const { ABOUT_DATA, FULL_TIMELINE, SKILLS_MATRIX, ALL_SERVICES, ALL_SOLUTIONS, SHORTS_GALLERY, EXTENDED_PROJECTS } = require('../constants-backend-fallback'); // Hypothetical import or duplicate data

// Simple echo endpoints for now to simulate DB
app.get('/api/about/:mode', (req, res) => res.json({})); // Populate with data
app.get('/api/about/timeline', (req, res) => res.json([])); 
app.get('/api/services/:mode', (req, res) => res.json([]));
app.get('/api/projects', (req, res) => res.json({ video: [], dev: [] }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
