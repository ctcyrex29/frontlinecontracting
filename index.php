<?php

require_once __DIR__ . '/includes/log.php';
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Start the session
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Set the default tab
$current_tab = isset($_GET['tab']) ? $_GET['tab'] : 'index'; // Default to 'dashboard'

// Include the content based on the selected tab
switch ($current_tab) {

    case 'home':
        include 'home.php';
        break;
    case 'about':
        include 'about.php';
        break;
    case 'services':
        include 'services.php';
        break;

    case 'portfolio':
        include 'portfolio.php';
        break;
    case 'testimonials':
        include 'testimonials.php';
        break;

    case 'blog':
        include 'blog.php';
        break;
    case 'contact':
        include 'contact.php';
        break;

    default:
        include 'index.php'; // Default to dashboard if no valid tab is selected
        break;
}

// In show_error_page, pass the previous page as a GET param if available
if (isset($_SERVER['HTTP_REFERER'])) {
    $_SESSION['error_back'] = $_SERVER['HTTP_REFERER'];
}

write_log('access', 'Visited index.php', []);
