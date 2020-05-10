<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$theme = $_POST['theme'];
$utm_source => $_POST['utm_source'];
$utm_medium => $_POST['utm_medium'];
$utm_content => $_POST['utm_content'];
$utm_term => $_POST['utm_term'];
$utm_campaign  => $_POST['utm_campaign'];


$token = "750677258:AAFVb8xTErwz3KKxs5bCBGyfWaHGnoBFcJM";
$chat_id = "-386402558";
$arr = array(
  'Имя' => $name,
  'Телефон' => $phone,
  'Тема' => $theme,
  'utm_source' => $utm_source,
  'utm_medium' => $utm_medium,
  'utm_content' => $utm_content,
  'utm_term' => $utm_term,
  'utm_campaign'  => $utm_campaign
);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Спасибо, заявка принята.</title>
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '301073850476793');
  fbq('track', 'PageView');
  fbq('track', 'Lead');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=301073850476793&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-118902244-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-118902244-1');
</script>
 </head>
<body>

 <style>
   		body{
   			text-align:center;
   			padding: 5% 0;
   			height: 100vh;
   			overflow-y: hidden;
   			font-family: 'Roboto', sans-serif;
   			font-size:20px;
   			line-height:38px;
   		}
   		div{
   			width: 70%;
   			margin:0 auto;
   			padding:3% 13%;
   			-webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
            border:2px solid #0277BD;
            background-color: #fbfbfb;
   		}
   		span{
   			font-weight: 900;
   		}
		img{
			max-width:100%;
			height:auto;
		}
   </style>
<div><p>Спасибо, заявка принята. <br>
В ближайшее время с вами свяжется наш специалист.<br>
Благодарим вас за обращение!</p></div>
<script type="text/javascript">
setTimeout(function() {window.location.replace("../index.php");}, 4000);</script>
<body>
</html>