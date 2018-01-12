<?php
    if(isset($_POST["name"]) && isset($_POST["email"])){
        $message = "";
        if(empty($_POST["name"]) || empty($_POST["email"])){
            $message = "Sorry, You didn't fill in all required fields.";
            echo $message;
        }
        else{
            $fullName = $_POST["name"];
            $emailAddr = $_POST["email"];
            $comment = "";
            if(!empty($_POST["comment"])){
                $comment = $_POST["comment"];
            }
            submitMessage($fullName, $emailAddr, $comment);
            $message = "You have sent message to me successfully.";
            echo $message;
        }
    }

    function submitMessage($name, $email, $message){
        $to = "sxjin1103@gmail.com";
        $subj = "Email from Portfolio Site";
        $headers = 'From: ' . $email;
        $msg = "Name: ".$name."\n\nEmail: ".$email."\n\nMassage: ".$message;
        //this will not work locally
        //this needs to be tested on your hosting
        mail($to, $subj, $msg, $headers);
    }
?>