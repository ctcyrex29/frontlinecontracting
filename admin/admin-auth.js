// admin-auth.js
// Express routes for admin authentication using SQLite database

const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db');
const router = express.Router();

// Admin login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.get('SELECT * FROM admin_users WHERE username = ?', [username], (err, user) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (!user) return res.status(401).json({ error: 'Invalid username or password' });
        bcrypt.compare(password, user.password_hash, (err, result) => {
            if (result) {
                // Auth success
                res.json({ success: true, username: user.username });
            } else {
                res.status(401).json({ error: 'Invalid username or password' });
            }
        });
    });
});

// Admin password change
router.post('/change-password', (req, res) => {
    const { username, currentPassword, newPassword } = req.body;
    db.get('SELECT * FROM admin_users WHERE username = ?', [username], (err, user) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (!user) return res.status(401).json({ error: 'Invalid user' });
        bcrypt.compare(currentPassword, user.password_hash, (err, result) => {
            if (!result) return res.status(401).json({ error: 'Current password is incorrect' });
            bcrypt.hash(newPassword, 10, (err, hash) => {
                if (err) return res.status(500).json({ error: 'Hashing error' });
                db.run('UPDATE admin_users SET password_hash = ? WHERE username = ?', [hash, username], err => {
                    if (err) return res.status(500).json({ error: 'Database error' });
                    res.json({ success: true });
                });
            });
        });
    });
});

// Admin registration (for initial setup only)
router.post('/register', (req, res) => {
    const { username, password, email } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ error: 'Hashing error' });
        db.run('INSERT INTO admin_users (username, password_hash, email) VALUES (?, ?, ?)', [username, hash, email], function(err) {
            if (err) return res.status(500).json({ error: 'Database error' });
            res.json({ success: true, id: this.lastID });
        });
    });
});

module.exports = router;
