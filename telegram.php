<?php
if(isset($_POST['user_name'])) {
    $name = $_POST['user_name'];
    $phone = $_POST['user_phone'];

    $token = "5298976749:AAENuyunnIOoZ66-CUsO0PUzd1vK4t1OEN8";
    $chat_id = "-611729384";
    $arr = array(
        'Имя пользователя: ' => $name,
        'Телефон: ' => "+".$phone
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

}
?>