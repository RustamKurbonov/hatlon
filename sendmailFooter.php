<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;

   require 'phpmailer/src/Exception.php';
   require 'phpmailer/src/PHPMailer.php';

   $mail = new PHPMailer(true);
   $mail->CharSet = 'UTF-8';
   $mail->setLanguage('ru', 'phpmailer/language/');
   $mail->IsHTML(true);

   $mail->setFrom('site@hatlon.org', 'Форма обратного звонка из подвала');
   $mail->addAddress('hatlon152@gmail.com');
   $mail->Subject = 'Заявка на звонок';

   $body = '<h2>Заявка на обратный звонок</h2>';
   $typeComm = 'E-mail';
   if($_POST[typeCommunication] == 'phone'){
      $typeComm = 'Телефон';
   }
   if(trim(!empty($_POST['name']))){
      $body.='<p><strong>Имя:</strong> ' .$_POST['name'].'</p>';
   }
   if (trim(!empty($_POST['tell']))){
      $body.='<p><strong>Телефон:</strong> ' .$_POST['tell'].'</p>';
   }
   if (trim(!empty($_POST['mail']))){
      $body.='<p><strong>E-mail:</strong> ' .$_POST['mail'].'</p>';
   }
   if (trim(!empty($_POST['text']))){
      $body.='<p><strong>Сообщение:</strong> ' .$_POST['text'].'</p>';
   }
   $body.='<p><strong>Предпочитаемый вид связи:</strong> ' .$typeComm.'</p>';

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