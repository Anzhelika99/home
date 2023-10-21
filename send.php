<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "PHPMailer/src/Exception.php";
    require "PHPMailer/src/PHPMailer.php";

    $mail = new PHPMailer(true); /* Создаем объект MAIL */
    $mail->CharSet = "UTF-8"; /* Задаем кодировку UTF-8 */
    $mail->setLanguage('ru', 'phpmailer/language/')
    $mail->IsHTML(true); /* Разрешаем работу с HTML */

    $mail->setFrom('a.nitser@yandex.ru', 'Анжелика Ницер'); //От кого
    $mail->addAddress("anzhelika.nitser@yandex.ru"); /* Здесь введите Email, куда отправлять */
    $mail->Subject = "Заявка с формы сайта Стильный Дом"; /* Тема письма */

    $email = $_POST["email"]; /* Почту */
    $phone = $_POST["phone"]; /* Телефон */
    $message = $_POST["message"]; /* Сообщение с формы */

    $body = '<h1>Заявка с формы сайта Стильный Дом</h1>'
    
    if (trim(!empty($email))) {
      $body.= '<p><strong>Email:</strong>' .$email'</p>'
    }
    if(trim(!empty($phone))) {
      $body.= '<p><strong>Телефон:</strong>' .$phone'</p>'
    }
    if(trim(!empty($message))) {
      $body.= '<p><strong>Сообщение:</strong>' .$message'</p>'
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