<?php

if (isset($note)&& isset($title)) {
 

    mysqli_query($conn, "insert into notes (Title, Notes) values ('$title', '$note')");
    echo  http_response_code(200);
    
}    
else{
    echo http_response_code(400);
}
?>