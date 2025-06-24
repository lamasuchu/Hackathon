<?php

session_start();

$host = 'localhost';
$dbUsername = 'root';
$password = ''; 
$database= 'hackathon';

$conn = new mysqli($host, $dbUsername, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$message = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $username = $_POST['username'];
    $password = $_POST['password'];
    var_dump($username,$password);

    // Prepare and execute query
    $stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    // Check if user exists
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($password_hash);
        $stmt->fetch();

    
        if(password_verify($password, $password_hash)) {
            $_SESSION['username'] = $username;
            $message = "Login successful. Welcome, $username!";
            header("Location:homepage.html");
        } 
        else {
            $message ="Incorrect password.";
        }
        } 
        else {
            $message ="Username not found";
        }

        $stmt->close();
    }

    $conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Next Destination - Login</title>
    <link rel="stylesheet" href="/Hackathon/css/login.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body>
    <div class="login-container">
        <div class="login-header">
            <img src="/Hackathon/images/logo.png" alt="Next Destination" class="logo">
            <h1>Welcome to Next Destination</h1>
            <p>Explore the beautiful destinations of Nepal</p>
        </div>
        <form id="loginForm" class="login-form">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit" class="login-btn">Login</button>
            <div class="signup-link">
                Don't have an account? <a href="register.html">Register</a>
            </div>
        </form>
    </div>
    <script src="/Hackathon/js/login.js"></script>
</body>
</html>