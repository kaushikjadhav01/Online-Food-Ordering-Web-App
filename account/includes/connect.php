<?php
session_start();
$servername = "127.0.0.1";
$server_user = "root";
$server_pass = "normally";
$dbname = "food";
$name = $_SESSION['name'];
$role = $_SESSION['role'];
$con = new mysqli($servername, $server_user, $server_pass, $dbname);
?>