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

if (mail('amalfizayavki@gmail.com', 'Заявка с сайта', $message))
{
	$result = array(
		"status" => "ok"
	);
}
else
{
	$result = array(
		"status" => "error"
	);
}

echo json_encode($result);
?>