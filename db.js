// db.js
// SQLite database setup and table creation for admin users, analytics, blog posts, portfolio items, and testimonials

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Database will be created in project root as 'site.db'
const db = new sqlite3.Database(path.join(__dirname, 'site.db'));

// Create tables if they don't exist
// Admin Users
const adminUsersTable = `CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

// Analytics
const analyticsTable = `CREATE TABLE IF NOT EXISTS analytics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_type TEXT NOT NULL,
    user_id INTEGER,
    page TEXT,
    details TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

// Blog Posts
const blogPostsTable = `CREATE TABLE IF NOT EXISTS blog_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    author_id INTEGER,
    published_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);`;

// Portfolio Items
const portfolioTable = `CREATE TABLE IF NOT EXISTS portfolio_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    category TEXT,
    images TEXT, -- comma-separated list or JSON
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

// Testimonials
const testimonialsTable = `CREATE TABLE IF NOT EXISTS testimonials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    content TEXT NOT NULL,
    approved INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

// Run table creation
const tables = [adminUsersTable, analyticsTable, blogPostsTable, portfolioTable, testimonialsTable];
tables.forEach(sql => db.run(sql));

module.exports = db;
