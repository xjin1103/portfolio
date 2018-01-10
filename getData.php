<?php
    require("connection.php");
    if($_SERVER["REQUEST_METHOD"] == "GET"){
        if(isset($_GET["loadContent"]) && $_GET["loadContent"] == "init"){
            $loadContentList = $conn->query("SELECT prod_img, prod_desc,prod_scale, prod_desc, prod_lightbox FROM production");
            if($loadContentList->num_rows > 0){
                $contentList = array();
                while($row = $loadContentList->fetch_assoc()){
                    array_push($contentList, $row);
                }
                echo json_encode($contentList);
            }
        }
    }
?>