<?php
ignore_user_abort(true);
set_time_limit(0);

header("Connection: close", true);
header("Content-Encoding: none\r\n");
header("Content-Length: 0", true);

flush();
ob_flush();

session_write_close();
//exit();
error_reporting(0);

$server = $_SERVER['HTTP_HOST'];
$name = $_REQUEST['name'];
if (isset($_REQUEST['tele'])) {
  $phone = $_REQUEST['tele'];
}
if (empty($phone) || empty($name)) {
  echo "I can not send!";
  exit;
}

$ip = $_SERVER['REMOTE_ADDR'];

$website = "http://" . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
$website = str_replace('mail.php', '', $website);

$chat_id = '-1001260584109';
$token = '1029321325:AAGuvee7xOofeR0LVK5lJbeH6hf3dk06XAI';

$nameFieldset = "Имя: ";
$phoneFieldset = "Телефон: ";
$additionalFieldset = "UTM метки";


$arr = array(
  'Новая заявка на УДАЛЕНИЕ ТАТУАЖА' => '',
  $nameFieldset => $name,
  $phoneFieldset => $phone,
  'Сайт: ' => $website,
);

if (!empty($_REQUEST['email']))
  $arr['email'] = $_REQUEST['email'];

if (!empty($_REQUEST['utm_source']))
  $arr['utm_source'] = $_REQUEST['utm_source'];

if (!empty($_REQUEST['utm_medium']))
  $arr['utm_medium'] = $_REQUEST['utm_medium'];

if (!empty($_REQUEST['utm_term']))
  $arr['utm_term'] = $_REQUEST['utm_term'];

if (!empty( $_REQUEST['utm_content']))
  $arr['utm_content'] =  $_REQUEST['utm_content'];

if (!empty($_REQUEST['utm_campaign']))
  $arr['utm_campaign'] = $_REQUEST['utm_campaign'];

foreach ($arr as $key => $value) {
  $txt .= "<b>" . $key . "</b> " . $value . "\n";
};
$txt = urlencode($txt);

$sendToTelegram = file_get_contents("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}");

$stat = file_get_contents("https://script.google.com/macros/s/AKfycbyW5-a_GK9wRKVYRgrGAczvzaM8zl0iZ8WBsHj-hj7LCELuXL4/exec?name=" . urlencode($name) . "&phone=" . urlencode($phone) . "&utm_source=" . urlencode($_REQUEST['utm_source']) . "&utm_medium=" . urlencode($_REQUEST['utm_medium']) . "&utm_term=" . urlencode($_REQUEST['utm_term']) . "&utm_content=" . urlencode($_REQUEST['utm_content']) . "&utm_campaign=" . urlencode($_REQUEST['utm_campaign']) . "&email=" . urlencode($_REQUEST['email']));


//file_get_contents("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$stat}");
/*
$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$project_name = trim($_POST["project_name"]);
	$admin_email  = trim($_POST["admin_email"]);
	$form_subject = trim($_POST["form_subject"]);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}
} else if ( $method === 'GET' ) {

	$project_name = trim($_GET["project_name"]);
	$admin_email  = trim($_GET["admin_email"]);
	$form_subject = trim($_GET["form_subject"]);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );
*/