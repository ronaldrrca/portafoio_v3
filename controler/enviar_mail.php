<?php
$name = $_POST['name'];
$cellphone = $_POST['cellphone'];
$phone = $_POST['phone'];
$mail = $_POST['email'];
$subject = $_POST['subject'];
$text = $_POST['message'];
$message = "";


$header = "From: bongoyor@gmail.com" . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
// $header .= "Mime-Version: 1.0 \r\n";
// $header .= "Content-Type: text/plain";

$message .= "Este mensaje fue enviado por: " . $name . "\r\n";
$message .= "Teléfono celular: " . $cellphone . " \r\n";
$message .= "Teléfono fijo: " . $phone . " \r\n";
$message .= "E-mail: " . $mail . " \r\n";
$message .= "Asunto: " . $subject . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time()) . ", a las " . date("h:i:sa") . " \r\n";
$message .= "Mensaje: " . $text . " \r\n";

echo $message;
die();

$to = 'ronaldrrca@gmail.com';
// $subject = $subject;

mail($to, $subject, $message, $header);



// header("Location:index.php");




?>