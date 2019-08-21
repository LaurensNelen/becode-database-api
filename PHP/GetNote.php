
<?php
header ("Access-Control-Allow-Origin: http://localhost:3000"); 
require_once('connect.php');
$title = filter_var($_GET["title"]);

$note = filter_var($_POST["note"]);
        
$sql = "SELECT * FROM notes WHERE Title='$title'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $rows['Note'] = $row;
    }
    print json_encode($rows);
} else {
    echo "0 results";
}


?>