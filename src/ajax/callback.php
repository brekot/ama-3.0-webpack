<?php
$message = 'Заявка с сайта: ';
$message .= 'Имя: ' . $_REQUEST['name'] . ' ; ';
$message .= 'E-mail: ' . $_REQUEST['email'] . ' ; ';
$message .= 'Телефон: ' . $_REQUEST['phone'] . ' ; ';

//mail('amalfimsk@gmail.com', 'Заявка с сайта', $message);
mail('brekot@ya.ru', 'Заявка с сайта', $message);

return 'ok';
?>