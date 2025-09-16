<?php
// Logging utility for MCC Telehealth
// Usage: write_log('access', 'User logged in', ['user_id' => 42]);

function write_log($type, $message, $context = []) {
    $allowed_types = ['access', 'error', 'activity', 'security'];
    if (!in_array($type, $allowed_types)) {
        $type = 'error';
    }
    $log_dir = __DIR__ . '/../logs/';
    if (!is_dir($log_dir)) {
        mkdir($log_dir, 0750, true);
    }
    $log_file = $log_dir . $type . '.log';
    $timestamp = date('c');
    $user_id = isset($_SESSION['user_id']) ? $_SESSION['user_id'] : '-';
    $ip = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '-';
    $ua = isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '-';
    $context_str = '';
    if (!empty($context)) {
        foreach ($context as $k => $v) {
            $context_str .= $k . '=' . str_replace(["\n", "\r", "|"], '', (string)$v) . ' ';
        }
        $context_str = trim($context_str);
    }
    $entry = "[$timestamp] user_id=$user_id ip=$ip ua=$ua $message";
    if ($context_str) {
        $entry .= " context: $context_str";
    }
    $entry = str_replace(["\n", "\r"], '', $entry) . "\n";
    file_put_contents($log_file, $entry, FILE_APPEND | LOCK_EX);
} 