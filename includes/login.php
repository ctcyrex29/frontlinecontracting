<?php
session_start();
include 'database.php';

// Initialize variables
$login_input = '';
$password = '';
$error_message = '';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Safely retrieve inputs
    $login_input = isset($_POST['login_input']) ? trim($_POST['login_input']) : '';
    $password = isset($_POST['password']) ? trim($_POST['password']) : '';

    // Validate inputs
    if (empty($login_input) || empty($password)) {
        $error_message = 'Please fill in all fields.';
    } else {
        // Prepare SQL query based on the current page
        if (basename($_SERVER['PHP_SELF']) == 'patient_login.php') {
            $stmt = $conn->prepare("SELECT id, password FROM users_patients WHERE username = ? OR email = ?");
        } elseif (basename($_SERVER['PHP_SELF']) == 'doctor_login.php') {
            $stmt = $conn->prepare("SELECT id, password FROM users_doctors WHERE username = ? OR email = ?");
        } else {
            $error_message = 'Invalid login attempt.';
        }

        // If the statement is valid, execute it
        if (isset($stmt)) {
            $stmt->bind_param("ss", $login_input, $login_input);
            $stmt->execute();
            $stmt->store_result();

            // Check if user exists
            if ($stmt->num_rows > 0) {
                $stmt->bind_result($user_id, $hashed_password);
                $stmt->fetch();

                // Verify the password
                if (password_verify($password, $hashed_password)) {
                    // Set session variables
                    $_SESSION['user_id'] = $user_id;
                    $_SESSION['username'] = $login_input;

                    // Redirect based on the current page
                    if (basename(path: $_SERVER['PHP_SELF']) == 'patient_login.php') {
                        header(header: "Location: ./users/patient/patient_account.php?id=" . $user_id);
                    } else {
                        header(header: "Location: ./users/doctor/doctor_account.php?id=" . $user_id);
                    }
                    exit();
                } else {
                    $error_message = 'Invalid password.';
                }
            } else {
                $error_message = 'User not found.';
            }
            $stmt->close();
        }
    }
}

$conn->close();
?>