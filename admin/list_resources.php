<?php
header('Content-Type: application/json');
$dir = realpath(__DIR__ . '/../resources');
$files = array();
if (is_dir($dir)) {
    foreach (scandir($dir) as $file) {
        if ($file !== '.' && $file !== '..' && !is_dir($dir . DIRECTORY_SEPARATOR . $file)) {
            $files[] = $file;
        }
    }
}
echo json_encode($files);
