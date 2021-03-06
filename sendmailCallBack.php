<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;

   require 'phpmailer/src/Exception.php';
   require 'phpmailer/src/PHPMailer.php';

   $mail = new PHPMailer(true);
   $mail->CharSet = 'UTF-8';
   $mail->setLanguage('ru', 'phpmailer/language/');
   $mail->IsHTML(true);

   $mail->setFrom('site@hatlon.org', 'Форма обратного звонка');
   $mail->addAddress('hatlon152@gmail.com');
   $mail->Subject = 'Заявка на звонок';

   $body = '<h2>Заявка на обратный звонок CallBack</h2>';
   if(trim(!empty($_POST['name']))){
      $body.='<p><strong>Имя:</strong> ' .$_POST['name'].'</p>';
   }
   if (trim(!empty($_POST['tell']))){
      $body.='<p><strong>Телефон:</strong> ' .$_POST['tell'].'</p>';
   }
   $mail->Body = $body;

   if(!$mail->send()) {
      $message = 'Ошибка. Повторите позже';
   } else {
      $message = 'Данные отправлены!';
   }

   $response = ['message' => $message];

   header('Content-type: application/json');
   echo json_encode($response);  
   ?>