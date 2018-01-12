<?php
    require("connection.php");
    if($_SERVER["REQUEST_METHOD"] == "GET"){
        if(isset($_GET["loadContent"]) && $_GET["loadContent"] == "init"){
            $loadContentList = $conn->query("SELECT prod_img, prod_name, prod_desc, prod_lightbox FROM production");
            if($loadContentList->num_rows > 0){
                $contentList = array();
                while($row = $loadContentList->fetch_assoc()){
                    array_push($contentList, $row);
                }
                echo json_encode($contentList);
            }
        }
        if(isset($_GET["getImg"])){
            $getImg = $_GET["getImg"];
            $getLightbox = $conn->query("SELECT prod_desc, prod_lightbox FROM production WHERE prod_name = '$getImg'");
            if($getLightbox->num_rows > 0){
                $lightBoxInfo = array();
                while($row = $getLightbox->fetch_assoc()){
                    array_push($lightBoxInfo, $row);
                }
                echo json_encode($lightBoxInfo);
            }
        }

    }
?>