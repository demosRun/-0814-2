var ratio = window.innerWidth / window.innerHeight
if (ratio < 1) {
    document.body.classList.add('min')
    var mySwiper = new Swiper(document.body,{
    })
    if (ratio < 0.56) {
        $('.one')[0].style.backgroundSize = 'auto 100%'
    }
    // 计算 transform-box 合适的缩放比
    $('.transform-box')[0].style.transform = 'scale(' + window.innerWidth / 980 + ')'
    // $('.w980.p5Con.clearfix')[0].style.transform = 'scale(' + window.innerWidth / 1000 + ')'
} else {
    document.body.classList.add('pc')
}


$(document).ready(function() {
    try{
        
        /*2*/
        var swiperP1 = new Swiper('.swiper-container-p1', {
            mode: 'horizontal',
            autoplay: 5000,
            autoplayDisableOnInteraction: false,
            loop: true,
            slidesPerView: 1,
            pagination: '.swiper-pagination1',
            paginationClickable: true,
            mousewheelControl: false,
            onSlideChangeStart: function(swiper){
                $(".num1 .thisp").html(swiperP1.activeLoopIndex+1);
            }
        });
        var allNump1 = $(".swiper-pagination1").find(".swiper-pagination-switch").length;
        $(".num1 .thisp").html(1);
        $(".num1 .allp").html(allNump1);
        $(".swiper-container-p1").mouseenter(function () {
            swiperP1.stopAutoplay();
        }).mouseleave(function () {
            swiperP1.startAutoplay();
        });
        $(".prev1").click(function(){
            swiperP1.swipePrev();
        });
        $(".next1").click(function(){
            swiperP1.swipeNext();
        });
        $('.pic1 li:nth-child(2n+1)').css("margin-left",0);
        $('.list1 li:nth-child(2n+1)').css("margin-left",0);
        /*p2Con*/
        var mySwiperP2 = new Swiper('.jdt1 .swiper-container-p2',{
            pagination: '.pagination2',
            loop:true,
            grabCursor: true,
            paginationClickable: true
        })
        $(".tit1 li").click(function(){
            $(".tit1 li").attr("class","");
            $(".pic2").hide();
          
            $(this).attr("class","active");
            $(".pic2").eq($(this).index()).show();
        });
        /*p5Con*/
        if (ratio > 1) {
            $(".p5Con .fr li").mouseover(function(){
                $(".p5Con .fr li").attr("class","");
                $(".p5Con .fl div").hide();
              
                $(this).attr("class","active");
                $(".p5Con .fl div").eq($(this).index()).show();
            });
        } else {
            $(".p5Con .fl div").show()
        }
        
        /*p6Con*/
        $(".p6Con li").eq(-1).css("border-bottom","none");
        $(".p6Con .fr li").mouseover(function(){
            $(".p6Con .fr li").attr("class","");
            $(".p6Con .fl div").hide();
          
            $(this).attr("class","active");
            $(".p6Con .fl div").eq($(this).index()).show();
        });
        /*p7Con*/
        if (ratio > 1) {
            $('.p7Con ul').roundabout({
                duration: 600,
                shape: 'square',
                minOpacity: 1,
                enableDrag: true,
                btnNext: ".prev2",
                btnPrev: ".next2"
            });
        }
        
        /*nav_r*/
        $(".nav_r li").eq(-1).find("span").css("border-bottom","none");
        $(".nav_r li").click(function(){
            $(".nav_r li").attr("id","");
          
            $(this).attr("id","active");
        });
        $(".wx_close").click(function(){
            $(".wxCon").hide();
        });
    }catch(e){}
});