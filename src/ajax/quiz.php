<?php

$message = 'Запрос цены: ';
$message .= 'Количество детей: ' . $_REQUEST['num1'];
$message .= 'Тип кровати: ' . $_REQUEST['num2'] . ' ; ';
$message .= 'Срок: ' . $_REQUEST['num3'] . ' ; ';
$message .= 'Материал: ' . $_REQUEST['num4'] . ' ; ';
$message .= 'Бюджет: ' . (isset($_REQUEST['num5-text']) ? $_REQUEST['num5-text'] : $_REQUEST['num5'] ) . ' ; ';
$message .= 'Имя: ' . $_REQUEST['name'] . ' ; ';
$message .= 'E-mail: ' . $_REQUEST['email'] . ' ; ';
$message .= 'Телефон: ' . $_REQUEST['phone'] . ' ; ';

//mail('amalfimsk@gmail.com', 'Запрос цены', $message);
mail('amalfizayavki@gmail.com', 'Запрос цены', $message);

$result = array(
    "status" => "ok"
);

echo json_encode($result);
?>