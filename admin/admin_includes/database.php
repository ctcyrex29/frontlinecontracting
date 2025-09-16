<?php
$db_server = "localhost";
$db_username = "root";
$db_password = "";
$dbname = "frontline_db"; // Update to your actual database name

try {
    // Corrected mysqli_connect syntax
    $conn = mysqli_connect($db_server, $db_username, $db_password, $dbname);

    if (!$conn) {
        throw new mysqli_sql_exception(mysqli_connect_error());
    }
} catch (mysqli_sql_exception $e) {
    die("Connection failed: " . $e->getMessage());
}
