<?php

        
$sql = "SELECT * FROM notes WHERE Title='$title'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo $row["Title"]. $row["Notes"];
    }
} else {
    echo "0 results";
}


?>