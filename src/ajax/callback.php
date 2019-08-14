<?php
$message = 'Заявка с сайта: ';
$message .= 'Имя: ' . $_REQUEST['callback_name'] . ' ; ';
$message .= 'E-mail: ' . $_REQUEST['callback_email'] . ' ; ';
$message .= 'Телефон: ' . $_REQUEST['callback_phone'] . ' ; ';

//mail('amalfimsk@gmail.com', 'Заявка с сайта', $message);
mail('brekot@ya.ru', 'Заявка с сайта', $message);

return 'ok';
?>