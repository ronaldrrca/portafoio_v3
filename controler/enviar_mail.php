<?php
$name = $_POST['name'];
$cellphone = $_POST['cellphone'];
$phone = $_POST['phone'];
$mail = $_POST['email'];
$subject = $_POST['subject'];
$text = $_POST['message'];
$message = "";
$to = 'ronaldrrca@gmail.com';

$header = "From: ronathbg@ronaldweb.com" . "\r\n";//El email remitente debe ser una cuenta del  dominio.

$message .= "Este mensaje fue enviado por: " . $name . "\r\n";
$message .= "Teléfono celular: " . $cellphone . " \r\n";
$message .= "Teléfono fijo: " . $phone . " \r\n";
$message .= "E-mail: " . $mail . " \r\n";
$message .= "Asunto: " . $subject . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time()) . ", a las " . date("h:i:sa") . " \r\n";
$message .= "Mensaje: " . $text . " \r\n";

if (mail($to, $subject, $message, $header)) {
    echo '<script>alert("Mensaje enviado con éxito, de ser necesario pronto recibirás una respuesta.");</script>';
}else{
    echo '<script>alert("Ha ocurrido un error, por favor contáctame a través de otro medio.");</script>';
}
echo '<meta http-equiv="refresh" content="0; url=../view/html/contactame.php">';
?>