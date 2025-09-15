<?php
header('Content-Type: application/json');

// Check for a valid directory to prevent directory traversal attacks
$dir = realpath(__DIR__ . '/../resources');
$files = array();

if ($dir === false || !is_dir($dir) || !is_readable($dir)) {
    http_response_code(500);
    echo json_encode(['error' => 'Resource directory not found or not accessible.']);
    exit;
}

foreach (scandir($dir) as $file) {
    // Basic check to prevent listing of parent directory and self
    // Also ensures we are only listing files
    if ($file !== '.' && $file !== '..' && is_file($dir . DIRECTORY_SEPARATOR . $file)) {
        $files[] = basename($file);
    }
}

echo json_encode($files);