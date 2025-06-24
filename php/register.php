<?php

$host = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "hackathon";

$conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['username'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Encrypt password
var_dump($username,$email,$password,$_POST['password']);
$sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->bind_param("sss", $username, $email, $password);
    $stmt->execute();
    echo "Registration successful";
    $stmt->close();
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
