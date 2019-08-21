<?php
//Database details

$db_host = 'localhost';
$db_username = 'admin';
$db_password = '3ZTZWyckkFv3';
$db_name = 'notes';

//Create connection and select DB
$conn = mysqli_connect($db_host, $db_username, $db_password, $db_name);
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}


?>