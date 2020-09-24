$(function(){
    //sidebar open and close

    $(".side_toggle .fa-bars").click(function(){
        $("#sideBar").fadeIn(500)
        $("#openSideNav").css({"right": "0"})
        $("#sideBar").css({"visibility": "visible"})
        $("#sideNav .fa-times").css({"display": "block"})
    })

    $("#sideNav .fa-times, #closeSideNav").click(function(){
        $("#sideBar").fadeOut(500)
        $("#openSideNav").css({"right": "-100%"})
        $("#sideBar").css({"visibility": "hidden"})
        $("#sideNav .fa-times").css({"display": "none"})
    })


    // Notification tray show and hide
    $(function(){
        $("#notification_icon").click(function(){
            $(".notification_tray").css({"top": "60px"})
        })
        $(".close_notification").click(function(){
            $(".notification_tray").css({"top": "100vh"})
        })
    })

    // Cover Image Upload
    $(function(){
        document.getElementById('cover_file').addEventListener('change', readURL, true);
        function readURL(){
            var file = document.getElementById("cover_file").files[0];
            var reader = new FileReader();
            reader.onloadend = function(){
                document.querySelector('.profile_cover').style.backgroundImage = "url(" + reader.result + ")";    
            }
            if(file){
                reader.readAsDataURL(file);
            }
        }
    })

    // Profile Image Upload
    $(function(){
        document.getElementById('file').addEventListener('change', readURL, true);
        function readURL(){
            var file = document.getElementById("file").files[0];
            var reader = new FileReader();
            reader.onloadend = function(){
                document.querySelector('.sidebar_img').style.backgroundImage = "url(" + reader.result + ")"; 
                document.querySelector('#sidenav_img').style.backgroundImage = "url(" + reader.result + ")"; 
                document.querySelector('.img_upload').style.backgroundImage = "url(" + reader.result + ")";       
            }
            if(file){
                reader.readAsDataURL(file);
            }
        }
    })

    // Username Change
    $('.save_username').click(function(){
        firstname = document.querySelector(".input_firstname").value
        lastname = document.querySelector(".input_lastname").value

        document.querySelector(".name_user").innerHTML = document.querySelector(".username").value
        document.querySelector("#name_user").innerHTML = document.querySelector(".username").value
        document.querySelector(".prof_username").innerHTML = document.querySelector(".username").value
        document.querySelector(".name").innerHTML = firstname + " " + lastname
        document.querySelector(".prof_email").innerHTML = document.querySelector(".input_email").value
    })

    // Profile image's modal
    $(function(){
        var modal = document.getElementById("myModal");

        var img = document.querySelector('.img_upload'),
        style = img.currentStyle || window.getComputedStyle(img, false),
        bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
        var modalImg = document.getElementById("img01");

        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = bi;
        }

        var span = document.getElementsByClassName("close-modal")[0];

        span.onclick = function() { 
            modal.style.display = "none";
        }
    })

    // Cover Picture's modal
    // $(function(){
    //     var modal = document.getElementById("myModal");

    //     var img = document.querySelector('.profile_cover'),
    //     style = img.currentStyle || window.getComputedStyle(img, false),
    //     bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    //     var modalImg = document.getElementById("img01");

    //     img.onclick = function(){
    //         modal.style.display = "block";
    //         modalImg.src = bi;
    //     }

    //     var span = document.getElementsByClassName("close-modal")[0];

    //     span.onclick = function() { 
    //         modal.style.display = "none";
    //     }
    // })



    // 404 Error page
    $(function(){
        function drawVisor() {
            const canvas = document.getElementById('visor');
            const ctx = canvas.getContext('2d');
            
            ctx.beginPath();
            ctx.moveTo(5, 45);
            ctx.bezierCurveTo(15, 64, 45, 64, 55, 45);
            
            ctx.lineTo(55, 20);
            ctx.bezierCurveTo(55, 15, 50, 10, 45, 10);
            
            ctx.lineTo(15, 10);
            
            ctx.bezierCurveTo(15, 10, 5, 10, 5, 20);
            ctx.lineTo(5, 45);
            
            ctx.fillStyle = '#2f3640';
            ctx.strokeStyle = '#f5f6fa';
            ctx.fill();
            ctx.stroke();
        }
          
        const cordCanvas = document.getElementById('cord');
        const ctx = cordCanvas.getContext('2d');
        
        let y1 = 160;
        let y2 = 100;
        let y3 = 100;
        
        let y1Forward = true;
        let y2Forward = false;
        let y3Forward = true;
        
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            
            ctx.beginPath();
            ctx.moveTo(130, 170);
            ctx.bezierCurveTo(200, y1, 295, y2, 350, y3);
            
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 8;
            ctx.stroke();
           
            
            if (y1 === 100) {
                y1Forward = true;
            }
            
            if (y1 === 300) {
                y1Forward = false;
            }
            
            if (y2 === 100) {
                y2Forward = true;
            }
            
            if (y2 === 310) {
                y2Forward = false;
            }
            
            if (y3 === 100) {
                y3Forward = true;
            }
            
            if (y3 === 317) {
                y3Forward = false;
            }
            
            y1Forward ? y1 += 1 : y1 -= 1;
            y2Forward ? y2 += 1 : y2 -= 1;
            y3Forward ? y3 += 1 : y3 -= 1;
        }
          
        drawVisor();
        animate();
    })

    $('.sidebar::-webkit-scrollbar').onhover(function(){
        $('.sidebar::-webkit-scrollbar').css({"display": "block"})
    })
    
    // document.getElementById('mode').click = function() {
    //     color1 = range(0, 80)
    //     color2 = range(80, 200)
    //     color3 = range(200, 255)
        
    //     if(document.querySelector(".page_inner").css.backgroundColor == `rgb(${color1}, ${color1}, ${color1})`){
    //         document.querySelector("page_inner").css.backgroundColor = "white"
    //     }
    // }

})