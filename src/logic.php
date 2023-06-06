<?php
header('Access-Control-Allow-Origin: *');

$connect = mysqli_connect('localhost', 'root', '', 'eminence_in_shadow');
if ($connect === false)
{
    die("ошибка поключения к бд");
}
$sql = "SELECT * FROM Numbers;";
if ($result=mysqli_query($connect,$sql))
{

    $helloResult = [];
    foreach($result as $item)
    {
        array_push($helloResult, $item);
    }

    header('Content-Type: application/json');
    echo json_encode($helloResult);
}
else
{
    header('Content-Type: application/json');
    echo json_encode("ошибка");
}
// Открываем JSON файл
// $jsonFile = '../data/objects.json';
// $data = file_get_contents($jsonFile);
// Декодируем JSON данные в ассоциативный массив
// $jsonData = json_decode($data, true);

// Отправляем JSON данные на фронтенд
// header('Content-Type: application/json');
// echo json_encode($jsonData);