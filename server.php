<?php

/**
 * Laravel - A PHP Framework For Web Artisans
 *
 * @package  Laravel
 * @author   Taylor Otwell <taylorotwell@gmail.com>
 */

// Define allowed file extensions for public access
$allowedExtensions = ['css', 'js', 'jpg', 'jpeg', 'png', 'gif', 'ico', 'svg', 'woff', 'woff2', 'ttf', 'eot'];

// Simple rate limiting using sessions
session_start();
$rateLimitWindow = 60; // 1 minute window
$maxRequests = 60;     // 60 requests per minute

$currentTime = time();
$requestHistory = isset($_SESSION['request_history']) ? $_SESSION['request_history'] : [];

// Clean up old requests
$requestHistory = array_filter($requestHistory, function($timestamp) use ($currentTime, $rateLimitWindow) {
    return $timestamp > ($currentTime - $rateLimitWindow);
});

// Check rate limit
if (count($requestHistory) >= $maxRequests) {
    http_response_code(429);
    error_log("[SECURITY] Rate limit exceeded for IP: " . $_SERVER['REMOTE_ADDR']);
    die('Too Many Requests');
}

// Add current request to history
$requestHistory[] = $currentTime;
$_SESSION['request_history'] = $requestHistory;

$uri = urldecode(
    parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)
);

// Sanitize the URI to prevent directory traversal
$uri = str_replace('\\', '/', $uri); // Normalize directory separators
$uri = preg_replace('/\/+/', '/', $uri); // Remove multiple consecutive slashes
$uri = preg_replace('/\.+\//', '', $uri); // Remove directory traversal sequences

// Extract file extension
$extension = strtolower(pathinfo($uri, PATHINFO_EXTENSION));

// Validate file extension if path is not root
if ($uri !== '/' && !empty($extension) && !in_array($extension, $allowedExtensions, true)) {
    error_log("[SECURITY] Blocked access to unauthorized file type: {$extension} from IP: " . $_SERVER['REMOTE_ADDR']);
    http_response_code(403);
    die('Forbidden');
}

// This file allows us to emulate Apache's "mod_rewrite" functionality from the
// built-in PHP web server. This provides a convenient way to test a Laravel
// application without having installed a "real" web server software here.
if ($uri !== '/') {
    $requestedPath = realpath(__DIR__ . '/public' . $uri);
    $publicPath = realpath(__DIR__ . '/public');
    
    // Ensure the requested path is within the public directory
    if ($requestedPath === false || strpos($requestedPath, $publicPath) !== 0) {
        error_log("[SECURITY] Attempted directory traversal from IP: " . $_SERVER['REMOTE_ADDR'] . " Path: " . $uri);
        http_response_code(403);
        die('Forbidden');
    }

    if (file_exists($requestedPath)) {
        return false;
    }
}

require_once __DIR__.'/public/index.php';
