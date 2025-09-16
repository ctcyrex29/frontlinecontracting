<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Start the session
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Unset all session variables
session_unset();

// Destroy the session
session_destroy();

// Redirect to the login page
header("Location: /mcctelehealth/index.php");
exit(); // Ensure no further code is executed after the redirect
?>