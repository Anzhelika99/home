<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "phpmailer/src/Exception.php";
    require "phpmailer/src/PHPMailer.php";

    $mail = new PHPMailer(true);
    $mail->CharSet = "UTF-8"; 
    $mail->setLanguage('ru', 'phpmailer/language/')
    $mail->IsHTML(true); 

    $mail->setFrom('a.nitser@yandex.ru', 'Анжелика Ницер'); //От кого
    $mail->addAddress("anzhelika.nitser@yandex.ru"); /* Здесь введите Email, куда отправлять */
    $mail->Subject = "Заявка с формы сайта Стильный Дом"; /* Тема письма */

    $body = '<h1>Заявка с формы сайта Стильный Дом</h1>'
    
    if (trim(!empty($email))) {
      $body.= '<p><strong>Email:</strong>' .$_POST["email"]'</p>'
    }
    if(trim(!empty($phone))) {
      $body.= '<p><strong>Телефон:</strong>' .$_POST["phone"]'</p>'
    }
    if(trim(!empty($message))) {
      $body.= '<p><strong>Сообщение:</strong>' .$_POST["message"]'</p>'
    }



    $mail->Body = $body;

    /* Проверяем отправлено ли сообщение */
    if (!$mail->send()) {
      $message = "Ошибка отправки";
    } else {
      $message = "Данные отправлены!";
    }

    /* Возвращаем ответ */	
    $response = ["message" => $message];

    /* Ответ в формате JSON */
    header('Content-type: application/json');
    echo json_encode($response);

?>