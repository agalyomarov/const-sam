<?php
$mail_to = 'autotuning-152@yandex.ru';
ini_set('log_errors', 'On');
ini_set('error_log', 'php_errors.log');
$data = json_decode(file_get_contents("php://input"), true);
require_once "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
$mail->SMTPDebug = 3;
$mail->isSMTP();
$mail->Host = "smtp.yandex.ru";
$mail->SMTPAuth = true;
$mail->Username = "autotuning-152";
$mail->Password = "aprtgelzkpgeifsc";
$mail->SMTPSecure = "ssl";
$mail->Port = 465;
$mail->From = "autotuning-152@yandex.ru";
$mail->FromName = "";
$mail->addAddress($mail_to, "");
$mail->isHTML(true);
$mail->Subject = "3D конструктор авточехлов онлайн на заказ";
$mail->headers = "Content-Type: text/html; charset=UTF-8";
$content = '';
$imgblock = $data['imgblock'];
unset($data['imgblock']);
foreach ($data as $key => $val) {
   $content .= $key . " : " . $val . "<br/>";
}
$body = `
<body>
` . $content . `
<br/>
<br/>
` . $imgblock . `
</body>`;
$mail->Body = html_entity_decode($body);
$mail->IsHTML(true);
try {
   $result = $mail->send();
   if ($result) {
      echo true;
   } else {
      echo false;
   }
} catch (\Exception $e) {
   // echo "Mailer Error: " . $mail->ErrorInfo;
   // echo $e->getMessage();
   echo "error";
}
