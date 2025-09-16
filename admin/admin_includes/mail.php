<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader (if using Composer)
// require 'vendor/autoload.php'; // Uncomment this line if using Composer

// Manually include PHPMailer's classes
require __DIR__ . '/../../includes/PHPMailer-master/src/Exception.php';
require __DIR__ . '/../../includes/PHPMailer-master/src/PHPMailer.php';
require __DIR__ . '/../../includes/PHPMailer-master/src/SMTP.php';

// Include database connection
$file_path = $_SERVER['DOCUMENT_ROOT'] . '/frontline/admin/admin_includes/database.php';
if (!file_exists($file_path)) {
    die("<h1>404 Page Not Found</h1> <p>" . htmlspecialchars($file_path) . "</p>");
}
include $file_path;

function sendEmail($to, $toName, $subject, $body, $altBody = 'This is a test email sent by Chris!')
{
    $mail = new PHPMailer(true);
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    try {
        // // Server settings for Google
        // $mail->isSMTP();
        // $mail->Host = 'smtp.gmail.com';
        // $mail->SMTPAuth = true;
        // $mail->Username = 'ctcyrex29@gmail.com';// Your Email address
        // $mail->Password = 'qznmlolyazwpgxda'; // Your Email password or App Password
        // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Use 'tls' for port 587 or 'ssl' for port 465
        // $mail->Port = 465;


        // Server settings for Test Account
        $mail->isSMTP();
        $mail->Host = 'mail.masvingocity.org.zw'; // Your SMTP server
        $mail->SMTPDebug = 0; // Set to 2 for verbose debug output
        $mail->SMTPAuth = true;
        $mail->Username = 'test25@masvingocity.org.zw'; // Your Email address
        $mail->Password = 'Test2025@#'; // Your Email password or App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Use 'tls' for port 587 or 'ssl' for port 465
        $mail->Port = 465;

        // Recipients
        $mail->setFrom('test25@masvingocity.org.zw', 'Masvingo City Council Telehealth');
        // $mail->addAddress('
        $mail->addAddress($to, $toName);

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $body;
        $mail->AltBody = $altBody;

        $mail->send();
        return true;
    } catch (Exception $e) {
        return "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}

// Example usage:
// $result = sendEmail('vickellar.01@gmail.com', 'Chrisdev Chaduka', 'Test Email from PHPMailer', $_POST['message']);
// if ($result === true) {
//     echo 'Email sent successfully!';
// } else {
//     echo $result;
// }
