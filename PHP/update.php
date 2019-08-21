<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require_once('connect.php');
$title = filter_var($_GET["title"]);
$newtitle = filter_var($_POST["newtitle"]);
mysqli_query($conn, "UPDATE notes SET Title='$newtitle' WHERE Title='$title';");

?>