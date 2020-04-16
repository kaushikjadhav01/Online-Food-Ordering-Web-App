<?php
include '../includes/connect.php';

$name = $_POST['name'];
$price = $_POST['price'];
$image = addslashes(file_get_contents($_FILES['image']['tmp_name']));
$sql = "INSERT INTO items (name, price,image) VALUES ('$name', $price,'$image')";
$con->query($sql);
header("location: ../admin-page.php");
?>