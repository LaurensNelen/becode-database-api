<?php
require_once('connect.php');
$title = filter_var($_GET["title"]);

$note = filter_var($_POST["note"]);
if (isset($note)&& isset($title)) {
 

    mysqli_query($conn, "insert into notes (Title, Notes) values ('$title', '$note')");
    echo  http_response_code(200);
    
}    
else{
    echo http_response_code(400);
}
?>