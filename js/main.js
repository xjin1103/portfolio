(function(){
    autoAlign();
    //resize window
    $(window).resize(function(){
        autoAlign();
    });
    //define variables
    var allThumbnails = document.querySelectorAll(".thumbnail");
    var lightBox = document.getElementById("lightBox");
    var lightBoxImg = document.getElementById("lightBoxImg");
    var lightBoxIntro = document.getElementById("lightBoxIntro");
    var myContactForm = document.getElementById("myContactForm");
    var lightbox = document.getElementById("lightBox");
    var sendResult = document.getElementById("sendResult");
    var emptyFields = document.getElementById("emptyFields");

    //add event listener
    allThumbnails.forEach(function(item,index){
        item.addEventListener('click', getLightBox, false);
    });
    myContactForm.addEventListener('submit', submitForm, false);
    lightbox.addEventListener("click", hideLightbox, false);

    //get thumbnail image
    var smallImg = new XMLHttpRequest();
    smallImg.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var content = JSON.parse(this.responseText);
            allThumbnails.forEach(function(item,index){
                for(var i = 0; i < content.length; i++){
                    if(item.id == content[i]["prod_name"]){
                        document.getElementById(item.id + "Img").src = content[i]["prod_img"];
                    }
                }
            });           
        }
      };
      smallImg.open("GET", "getData.php?loadContent=init", true);
      smallImg.send();

    //open lightbox
    function getLightBox(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200){
                var imgInfo = JSON.parse(this.responseText);
    
                lightBoxImg.src = imgInfo[0]["prod_lightbox"];
                lightBoxIntro.innerHTML = imgInfo[0]["prod_desc"];
            }
          };
          xhttp.open("GET", "getData.php?getImg=" + this.id, true);
          xhttp.send();
        
          lightBox.style.display = "block"; 
    }

    //close light box
    function hideLightbox(){
        lightbox.style.display = 'none';
    }

    //send email
    function submitForm(e){
        e.preventDefault();
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var comment = document.getElementById("comment").value;
        if(fname == "" || lname == "" || email == ""){
            emptyFields.style.display = "block";
        }
        else{
            var sendMail = new XMLHttpRequest();
            sendMail.open("POST", "sendEmail.php", true);
            sendMail.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            var params = "name=" + fname + " " + lname + "&email=" + email + "&comment=" + comment;
            sendMail.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200){
                    console.log("fire" + this.responseText);
                    sendResult.innerHTML = this.responseText;
                    emptyFields.style.display = "none";
                    sendResult.style.display = "block";
                }
              };
              sendMail.send(params); 
        }
    }

    //auto align elements on home page
    function autoAlign(){
        var windowWidth = $(window).width();
        var windowHeight= $(window).height();
        var logoWidth = $(".logo").innerWidth();
        var topBarHeight = $(".topBar").height();
        var navHeight = $("header nav").outerHeight();
        $(".logo").css("margin-left", (windowWidth - logoWidth)/2 + "px");
        $(".carousel").css("padding-top", topBarHeight + navHeight + "px");
        if(windowWidth > windowHeight){
            $(".carousel-item img").css("height", windowHeight-topBarHeight-navHeight + "px");
        }
        else{  
            $(".carousel-item img").css("height", "auto");
        }
    }

})();
