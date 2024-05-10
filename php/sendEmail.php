<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["nameInput"];
    $email = $_POST["emailInput"];
    $message = $_POST["messageInput"];

    // Email parameters
    $to = "mywebaura@gmail.com"; // Change this to your email address
    $subject = $message;
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "Email sent successfully";
    } else {
        echo "Failed to send email";
    }
}
?>