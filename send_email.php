<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $mobile = $_POST['mobile'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Set up email headers
  $to = "hasiru113@gmail.com"; // Your email address
  $subject = "New contact from website: $subject";
  $headers = "From: $name <$email>";

  // Compose the email content
  $email_content = "Name: $name\n";
  $email_content .= "Email: $email\n";
  $email_content .= "Mobile Number: $mobile\n\n";
  $email_content .= "Message:\n$message\n";

  // Send the email
  if (mail($to, $subject, $email_content, $headers)) {
    echo "Your message has been sent successfully.";
  } else {
    echo "Oops! Something went wrong and we couldn't send your message.";
  }
}
?>