<?php

$id = $_GET['id'];


$connect = mysqli_connect('localhost', 'root', '', 'eminence_in_shadow');
if ($connect === false)
{
    die("ошибка поключения к бд");
}

$sql = "DELETE FROM Numbers WHERE id={$id}";

$result = mysqli_query($connect, $sql);

header('Location: http://localhost:1234');
exit;

?>