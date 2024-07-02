<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Basic validation (you should enhance this)
    if (empty($username) || empty($email) || empty($password)) {
        // Handle empty fields error
        echo "Please fill in all fields.";
        exit;
    }

    // Dummy user registration (replace with actual database query)
    // Here, we'll just simulate successful registration
    echo "Registration successful! You can now <a href='login.php'>login</a>.";
    exit;
} else {
    // Redirect back to registration page if accessed directly
    header("Location: register.php");
    exit;
}
?>
