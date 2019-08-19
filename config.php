<?php 
require_once('connect.php');
$title = filter_var($_GET["title"]);

$note = filter_var($_POST["note"]);
require_once('GetNote.php');

?>