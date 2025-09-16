// admin-auth.js
// Express routes for admin authentication using MySQL database

const express = require('express');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
const router = express.Router();

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_mysql_user',
    password: 'your_mysql_password',
    database: 'your_database_name'
});

// Admin login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM admin_users WHERE username = ?', [username], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (results.length === 0) return res.status(401).json({ error: 'Invalid username or password' });
        const user = results[0];
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
    db.query('SELECT * FROM admin_users WHERE username = ?', [username], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (results.length === 0) return res.status(401).json({ error: 'Invalid user' });
        const user = results[0];
        bcrypt.compare(currentPassword, user.password_hash, (err, result) => {
            if (!result) return res.status(401).json({ error: 'Current password is incorrect' });
            bcrypt.hash(newPassword, 10, (err, hash) => {
                if (err) return res.status(500).json({ error: 'Hashing error' });
                db.query('UPDATE admin_users SET password_hash = ? WHERE username = ?', [hash, username], err => {
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
        db.query('INSERT INTO admin_users (username, password_hash, email) VALUES (?, ?, ?)', [username, hash, email], (err, result) => {
            if (err) return res.status(500).json({ error: 'Database error' });
            res.json({ success: true, id: result.insertId });
        });
    });
});

module.exports = router;