<?php
require_once('connect.php');
$title = filter_var($_GET["title"]);

$note = filter_var($_POST["note"]);
mysqli_query($conn, "DELETE FROM notes WHERE Title='$title';");
    

?>