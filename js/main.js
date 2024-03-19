$(function(){
    /*     alert( $(window).scrollTop() ) */

    const scrollY = $(window).scrollTop();
    
    //header fix_box
    var header_clone = $("#header-2").contents().clone()

    var clone_box = $("<div class=fix_box></div>")

    var header_height = $("header>nav").offset().top + $("header>nav").outerHeight()

    clone_box.append(header_clone)

    $("body").append(clone_box)

    $(window).scroll(function(){
        if($(this).scrollTop() > header_height){
            clone_box.addClass("top")
            $("#header-2").css("opacity","0")
        }else{
            clone_box.removeClass("top")
            $("#header-2").css("opacity","1")
        }
    });
    //header fix_box

    //nav
    $('.sub_parents').mouseover(function(){
        $('.sub').stop().slideDown()
    })
    $('.sub_parents').mouseout(function(){
        $('.sub').stop().slideUp()
    })
    //nav

    //sidemenu--------------------------------------------------------------
    $(window).scroll(function(){
        if($(this).scrollTop() < header_height+10){
            $("#sideMenu").css("left","-310px")
        }
    });

    $(window).scroll(function(){
        if($(this).scrollTop() < header_height+10){
            $(".fix_box nav div svg").removeClass("active")
        }
    });

    var a = 0
    var b = 0

    //fix_box sidemenu
    $(window).resize(function(){
    if($(window).width() < 480) {
        //윈도우크기가 480보다 작을때
        $('.side-sub-parents').mouseover(function(){
            $('.side-sub').css({left:'160px'})
        })
        $('.side-sub-parents').mouseout(function(){
            $('.side-sub').css({left:'-160px'})
        })
    }else if($(window).width() < 768){
        //윈도우크기가 768보다 작을때
        $('.side-sub-parents').mouseover(function(){
            $('.side-sub').css({left:'200px'})
        })
        $('.side-sub-parents').mouseout(function(){
            $('.side-sub').css({left:'-200px'})
        })
    }else{
        //윈도우크기가 768보다 클때
        $('.side-sub-parents').mouseover(function(){
            $('.side-sub').css({left:'300px'})
        })
        $('.side-sub-parents').mouseout(function(){
            $('.side-sub').css({left:'-300px'})
        })
    }
    })

    if($(window).width() < 480) {
        //윈도우크기가 480보다 작을때
        $('.side-sub-parents').mouseover(function(){
            $('.side-sub').css({left:'160px'})
        })
        $('.side-sub-parents').mouseout(function(){
            $('.side-sub').css({left:'-160px'})
        })
    }else if($(window).width() < 768){
        //윈도우크기가 768보다 작을때
        $('.side-sub-parents').mouseover(function(){
            $('.side-sub').css({left:'200px'})
        })
        $('.side-sub-parents').mouseout(function(){
            $('.side-sub').css({left:'-200px'})
        })
    }else{
        //윈도우크기가 768보다 클때
        $('.side-sub-parents').mouseover(function(){
            $('.side-sub').css({left:'300px'})
        })
        $('.side-sub-parents').mouseout(function(){
            $('.side-sub').css({left:'-300px'})
        })
    }

    $('.fix_box>nav').click(function(){
        a++
        b=a%2
        if(b==1){
            $("#sideMenu").css("left","0px")
            $(".fix_box nav svg").addClass("active")
        }else{
            $("#sideMenu").css("left","-310px")
            $(".fix_box nav svg").removeClass("active")
        }
    })

    $('#header-2>nav').click(function(){
        a++
        b=a%2
        if(b==1){
            $("#sideMenu").css("left","0px")
            $("#header-2 nav svg").addClass("active")
        }else{
            $("#sideMenu").css("left","-310px")
            $("#header-2 nav svg").removeClass("active")
        }
    })
    


    //sidemenu ------------------------------------------------------------------

    //search(input)

    if($(window).width() > 920){
        //윈도우 크기가 920보다 클때
        $('.openBtn').click(function(){
            $(".search1").show();
        })
    
        $('.fix_box>.mypage .openBtn').click(function(){
            $(".search1").show();
        })
    
        $('.closeBtn').click(function(){
            $(".search1").hide();
        })
    }else{
        //윈도우 크기가 920보다 작을때
        $('.openBtn').click(function(){
            $(".search1").hide();
        })
    
        $('.fix_box>.mypage .openBtn').click(function(){
            $(".search1").hide();
        })
    
        $('.closeBtn').click(function(){
            $(".search1").hide();
        })
    }

    //search(input)


    //ad

    var mySwiper = new Swiper('.swiper-container', {
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        autoplay: {
            delay: 5000,
        },
    });

    //ad

    //owl slider (underwear, bestitem, beauty , project)
    $(window).resize(function(){
    if($(window).width() < 1000) {
        // window 크기가 1000보다 작을때
        $('.underwear>.owl-carousel').owlCarousel({
            center: false,
            loop:false,
            margin:24,
            nav:false,
            responsive:{
                0:{
                    items:4
                },
                769:{
                    items:3
                    
                },
                1330:{
                    items:3
                },
                1650:{
                    items:3
                },}
    
        });
        } else {
            // window 크기가 1000보다 클때
            $('.underwear>.owl-carousel').owlCarousel({
                rtl:true,
                center: false,
                loop:false,
                margin:24,
                nav:false,
                responsive:{
                    0:{
                        items:4
                    },
                    769:{
                        items:3
                        
                    },
                    1330:{
                        items:3
                    },
                    1650:{
                        items:3
                    }}
        
            });
            }
    });


    if($(window).width() < 1000) {
        // window 크기가 1000보다 작을때
        $('.underwear>.owl-carousel').owlCarousel({
            center: false,
            loop:false,
            margin:24,
            nav:false,
            responsive:{
                0:{
                    items:4
                },
                769:{
                    items:3
                    
                },
                1330:{
                    items:3
                },
                1650:{
                    items:3
                },}
    
        });
        } else {
        // window 크기가 1000보다 클때
        $('.underwear>.owl-carousel').owlCarousel({
            rtl:true,
            center: false,
            loop:false,
            margin:24,
            nav:false,
            responsive:{
                0:{
                    items:4
                },
                769:{
                    items:3
                    
                },
                1330:{
                    items:3
                },
                1650:{
                    items:3
                }}
    
        });
        }


    //bestitem
    $('.bestitem>.owl-carousel').owlCarousel({
        center: false,
        loop:false,
        margin:24,
        nav:false,
        responsive:{
            0:{
                items:4
            },
            769:{
                items:3
                
            },
            1330:{
                items:3
            }}

    });

    //beauty
    $('.slider-wrap>.owl-carousel').owlCarousel({
        center: false,
        loop:false,
        margin:24,
        nav:false,
        responsive:{
            0:{
                items:6
            },
            1200:{
                items:6
                
            },
            1330:{
                items:5
            }}

        });

    //project
    $('#project-wrap2>.owl-carousel').owlCarousel({
        center: false,
        loop:false,
        margin:24,
        nav:false,
        responsive:{
            0:{
                items:3
            },
            1000:{
                items:4
                
            }}

    });
    //owl slider (underwear, bestitem, beauty)

    //parallax
    if($(window).width() < 1200) {
            // window 크기가 1200보다 작을때

            const ani4 = gsap.timeline();
            ani4.from("#project-wrap>.project-img", {
                autoAlpha:1, 
                scale: 1,
                width: "800px",
                height: "750px"
            })
            
            ScrollTrigger.create({
                animation: ani4,
                trigger: "#project-wrap",
                start: "top top",
                end: "+=1700",
                scrub: true,
                pin: true,
                markers: false,
                anticipatePin: 0.2
            });
        
            
            $(window).scroll(function(){
                if($(this).scrollTop() > 3200){
                    $(".popup").css({"top":"55%","transform":"translateY(-50%)","opacity":"1"})
                    $(".phone1").css({"left":"-50px"})
                    $(".phone2").css({"left":"-10px"})
                    $(".airpods").css({"top":"-90px","left":"80px","transform":"rotate(-13deg)","opacity":"1"})
                    $(".wallet").css({"right":"-85px"})
                    $(".magsafe").css({"right":"-120px"})
                }else{
                    $(".popup").css("top","1500px")
                    $(".popup").css("opacity","0")
                    $(".phone1").css({"left":"-1000px"})
                    $(".phone2").css({"left":"-1000px"})
                    $(".airpods").css({"top":"-1000px","opacity":"0"})
                    $(".wallet").css({"right":"-1000px"})
                    $(".magsafe").css({"right":"-1000px"})
                }
            });
        
            $(window).scroll(function(){
                if($(this).scrollTop() > 3200){
                    $(".project-img").css("background","url(img/casetify/bg2.jpg) no-repeat center / cover")
                }else{
                    $(".project-img").css("background","url(img/casetify/bg3.png) no-repeat center / cover")
                }
            })
            } else {
            // window 크기가 1200보다 클때

            const ani4 = gsap.timeline();
            ani4.from("#project-wrap>.project-img", {
                autoAlpha:1, 
                scale: 1,
                width: "100vw",
                height: "100vh"
            })
            
            ScrollTrigger.create({
                animation: ani4,
                trigger: "#project-wrap",
                start: "top top",
                end: "+=2500",
                scrub: true,
                pin: true,
                markers: false,
                anticipatePin: 1
            });
        

            $(window).scroll(function(){
                if($(this).scrollTop() > 4500){
                    $(".popup").css({"top":"50%","transform":"translateY(-50%)","opacity":"1"})
                    $(".phone1").css({"left":"-50px"})
                    $(".phone2").css({"left":"-10px"})
                    $(".airpods").css({"top":"-192px","left":"210px","transform":"rotate(-13deg)","opacity":"1"})
                    $(".wallet").css({"right":"-125px"})
                    $(".magsafe").css({"right":"-120px"})
                }else{
                    $(".popup").css("top","1500px")
                    $(".popup").css("opacity","0")
                    $(".phone1").css({"left":"-1000px"})
                    $(".phone2").css({"left":"-1000px"})
                    $(".airpods").css({"top":"-1000px","opacity":"0"})
                    $(".wallet").css({"right":"-1000px"})
                    $(".magsafe").css({"right":"-1000px"})
                }
            });
        
            $(window).scroll(function(){
                if($(this).scrollTop() > 4600){
                    $(".project-img").css("background","url(img/casetify/bg2.jpg) no-repeat center / cover")
                }else{
                    $(".project-img").css("background","url(img/casetify/bg.png) no-repeat center / cover")
                }
            })
            }
    
    //parallax

    //top_btn
    $(".topBtn").click(function(){
        $("html").animate({scrollTop:0},1)
    })
    //top_btn

    //반응형
    var dwidth = jQuery(window).width();
    jQuery(window).bind('resize', function(e){
    
        var wwidth = jQuery(window).width();
    
        if(dwidth!==wwidth){
         dwidth = jQuery(window).width();
    
        if (window.RT) clearTimeout(window.RT);
        window.RT = setTimeout(function(){
            this.location.reload(false); /* false to get page from cache */
        }, 500);
    }
    });

})
