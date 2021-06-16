<?php
    $conn = mysqli_connect("localhost", "root", "", "chatApp");
    if(!$conn){
        echo "DataBase Connected" . mysqli_connect_error();
    }
?>