<?php

$message = 'Запрос цены: ';
$message .= 'Количество детей: ' . $_REQUEST['question1'];
$message .= 'Тип кровати: ' . $_REQUEST['question2'] . ' ; ';
$message .= 'Срок: ' . $_REQUEST['question3'] . ' ; ';
$message .= 'Материал: ' . $_REQUEST['question4'] . ' ; ';
$message .= 'Бюджет: ' . (isset($_REQUEST['question5-text']) ? $_REQUEST['question5-text'] : $_REQUEST['question5'] ) . ' ; ';
$message .= 'Имя: ' . $_REQUEST['quiz_name'] . ' ; ';
$message .= 'E-mail: ' . $_REQUEST['quiz_email'] . ' ; ';
$message .= 'Телефон: ' . $_REQUEST['quiz_phone'] . ' ; ';

//mail('amalfimsk@gmail.com', 'Запрос цены', $message);
mail('brekot@ya.ru', 'Запрос цены', $message);

return 'ok';
?>