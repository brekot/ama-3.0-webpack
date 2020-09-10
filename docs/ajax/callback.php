<?php
$message = 'Заявка с сайта: ';
$message .= 'Имя: ' . $_REQUEST['name'] . ' ; ';
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