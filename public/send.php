<?php
// Файлы phpmailer
require 'phpMailer/PHPMailer.php';
require 'phpMailer/SMTP.php';
require 'phpMailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['mail_post'];


// Формирование самого письма
$title = "moovy.io";
$body = "
<h2>Заявка на подписку</h2>
<b>Почта:</b> $email<br><br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = false;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function ($str, $level) {
        $GLOBALS['status'][] = $str;
    };
    $mail->SMTPAutoTLS = false;
    // Настройки вашей почты
    $mail->Host = 'localhost'; // SMTP сервера вашей почты
    $mail->Username   = 'info@moovy.io'; // Логин на почте
    $mail->Password   = '3xK777qEQySV3tK5S46W'; // Пароль на почте
    // $mail->SMTPSecure = 'ssl';
    $mail->Port = 25;
    $mail->setFrom('info@moovy.io', 'Moovy Mailer'); // Адрес самой почты и имя отправителя



    // Получатель письма
    $mail->addAddress('moovy.main@gmail.com');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    // Проверяем отравленность сообщения
    if ($mail->send()) {
        $result = "success";
    } else {
        $result = "error";
    }
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
