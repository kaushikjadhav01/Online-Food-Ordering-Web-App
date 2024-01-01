<?php
$user_id=$_SESSION['user_id'];
$sql = $con->query("SELECT * FROM wallet where customer_id = $user_id");
$row1 = $sql->fetch_assoc();
$wallet_id = $row1['id'];
$sql = $con->query("SELECT * FROM wallet_details where wallet_id = $wallet_id");
$row1 = $sql->fetch_assoc();
$balance = $row1['balance'];
?>