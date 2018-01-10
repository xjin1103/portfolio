<?php
    if(isset($_POST["fname"]) && isset($_POST["lname"]) && isset($_POST["email"])){
        $message = "";
        if(empty($_POST["fname"]) || empty($_POST["lname"]) || empty($_POST["email"])){
            $message = "Sorry, You didn't fill in all required fields.";
            echo $message;
        }
        else{
            $fname = $_POST["fname"];
            $lname = $_POST["lname"];
            $emailAddr = $_POST["email"];
            if(!empty($_POST["comment"])){
                $comment = $_POST["comment"];
            }
            $fullName = $fname . " " . $lname;
            submitMessage($fullName, $emailAddr, $comment);
            $message = "You have sent message to me successfully.";
            echo $message;
        }

    }

    function submitMessage($name, $email, $message){
        $to = "sxjin1103@gmail.com";
        $subj = "Email from Portfolio Site";
        $headers = 'From: ' . $email . PHP_EOL ;
        $msg = "Name: ".$name."\n\nEmail: ".$email."\n\nMassage: ".$message;
        //this will not work locally
        //this needs to be tested on your hosting
        mail($to, $subj, $msg, $headers);
    }
?>