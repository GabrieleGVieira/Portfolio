<?php
$nome = $_POST['nome']
$email = $_POST['email']
require 'vendedor/autoload.php';

$from = new SendGrid\Email (null, "gabrielevieira011@gmail.com.br");
$subject = 'Identificação Portifólio'
$to = new SendGrid\Email(null, 'gabrielevieira011@gmail.com');
$content = new SendGrid\Content('text\html', 'Olá Gabi, <br><br> Alguém viu seu portifólio<br><br> Nome: $nome<br><br>Email: $email');
$mail = new SendGrid\Mail($from, $subject, $to, $content);

//Necessário pegar a chave//
$apiKey = '';
$sg = new \SendGrid($apiKey);

$response = $sg->client->mail() ->send() ->post($mail);
header('Location: '.$P2.html);;

?>
</body>
<html>

