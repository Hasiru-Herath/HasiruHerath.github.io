<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form data
  $full_name = $_POST['full_name'];
  $email = $_POST['email'];
  $mobile_number = $_POST['mobile_number'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Set up email
  $to = "hasiru113@gmail.com";
  $subject = "New message from your website: $subject";
  $body = "Full Name: $full_name\nEmail: $email\nMobile Number: $mobile_number\nMessage: $message";

  // Send email
  if (mail($to, $subject, $body)) {
    echo "Message sent successfully!";
  } else {
    echo "Oops! Something went wrong.";
  }
}
?>