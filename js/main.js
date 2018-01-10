(function(){
    autoAlign();
    //resize window
    $(window).resize(function(){
        autoAlign();
    });

    //get content from database
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var html = "";
            var content = JSON.parse(this.responseText);
            for(var i = 0; i < content.length; i++){
                if(content[i]["prod_scale"] == "long"){
                    html+= "<div class='thumbnailLong'>" + "<img src='" + content[i]["prod_img"] + "' alt='work img'/>" + "<label class='hdPath'>" + content[i]["prod_lightbox"] + "</label>" +"<div class='imgDesc'>" + content[i]["prod_desc"] + "</div>" + "</div>";
                }
                else{
                    html+= "<div class='thumbnailShort'>" + "<img src='" + content[i]["prod_img"] + "' alt='work img'/>" + "<label class='hdPath'>" + content[i]["prod_lightbox"] + "</label>" +"<div class='imgDesc'>" + content[i]["prod_desc"] + "</div>" + "</div>";
                }  
            }
            $(".thumbnailList").append(html);
        }
      };
      xhttp.open("GET", "getData.php?loadContent=init", true);
      xhttp.send();

    //navigate
    /*$("header nav ul li a").click(function(){
        var currNavId = $(this).attr("id");
        $("body").animate({
            scrollTop: $("#" + currNavId + "Panel").offset().top - topBarHeight - navHeight
        });
    });*/

    //light box
    $(".thumbnailList").on('click', 'div',function(){
        var currThumbnail = $(this).find("img").attr("src");
        var lightBoxContent = "";
        console.log($(this).find("div").html());
        lightBoxContent = "<div class='innerBox'><img src='" + $(this).find("label").html() + "' alt='HD works'/>" + "<div class='intro'>" + $(this).find("div").html() + "</div></div>";
        $(".lightbox").html(lightBoxContent);
        $(".lightbox").fadeIn();
    });

    //close light box
    var lightbox = document.getElementById("lightBox");
    lightbox.addEventListener("click", hideLightbox);
    function hideLightbox(){
        lightbox.style.display = 'none';
    }

    /*$(".lightbox").click(function(){
        $(".lightbox").fadeOut();
        $("body").removeClass("noScroll");
    });*/
    //send email
    $(".contactForm").submit(function(e){
            if($.trim($("#fname").val()) == "" || $.trim($("#lname").val()) == "" || $.trim($("#email").val()) == ""){
                $(".formMessage").fadeIn();
            }
            else{
                $(".formMessage").fadeOut();
                var firstName = $("#fname").val();
                console.log(firstName);
                var lastName = $("#lname").val();
                var emailAddr = $("#email").val();
                var comments = "";
                if($.trim($("#comment").val()) !== ""){
                    comments = $("#comment").val();
                }
                $.post("sendEmail.php" , {fname: firstName, lname: lastName, email: emailAddr, comment: comments}, function(data){
                    $(".successMsg").html(data);
                    $(".successMsg").fadeIn();
                });
            }

        e.preventDefault();
    });
})();

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
