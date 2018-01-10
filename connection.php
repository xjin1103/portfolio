<?php
    $host_name  = "db718253180.db.1and1.com";
    $database   = "db718253180";
    $user_name  = "dbo718253180";
    $password   = "tamaki123";
    $conn = mysqli_connect($host_name, $user_name, $password, $database);
    
    if(mysqli_connect_errno())
    {
    echo "<p>Verbindung zum MySQL Server fehlgeschlagen: ".mysqli_connect_error()."</p>";
    }
?>