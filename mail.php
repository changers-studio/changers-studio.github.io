<?php

$method = $_SERVER['REQUEST_METHOD'];

// initialize the message variable
$message = "";

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

    $project_name = "Drawdep";
    $admin_email  = "sirtut.co.il@gmail.com";
    $form_subject = "Feedback form";

    foreach ( $_POST as $key => $value ) {
        if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
        $message .= "
            $key: $value
        ";
        }
    }
} else if ( $method === 'GET' ) {

		$project_name = "Drawdep";
    $admin_email  = "sirtut.co.il@gmail.com";
    $form_subject = "Feedback form";

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
				$key: $value
      ";
	}
}
}

function adopt($text) {
    return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );