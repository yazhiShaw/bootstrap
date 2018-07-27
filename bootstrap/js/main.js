//窗口滚动事件开始=================================================
$(window).scroll(function(){
	headerInit();
});


function headerInit(){
	if($(this).scrollTop()>0){
		$("body").addClass("fiexed-header-on");
	}else{
		$("body").removeClass("fiexed-header-on");
	}
}
headerInit();
//窗体滚动事件结束=================================================


//背景图片事件开始=================================================

var images = ["img/bg5.jpg","img/bg6.jpg","img/bg4.jpg"];

$('.index').backstretch(images, {
        fade: 750,
        duration: 3500,
        preload: 1, //Use the lazy-loading functionality
        start: 2 //Optional - now starts with "dome.jpg"
    });
//背景图片事件结束=================================================
//滚动监听事件开始=================================================
$('body').scrollspy({ target: '#mynavbar' })
//滚动监听事件结束=================================================
//平滑监听事件开始=================================================

$('.navbar a').click(function(event){
	var target = $(this.hash);
	$("html").animate({
		scrollTop:target.offset().top
	},800);
});
//平滑监听事件结束=================================================

//
//$('.navbar a').click(function(event){
//	$('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
//});
//

//图集过滤事件开始
//$(".isotope-container").isotope({ filter:'.web-design'})
//$(".isotope-container").isotope({ filter: '.app-develop' })

$("#portfolio .filter li a").click(function(){
	var filterValue = $(this).attr('data-filter');
	$(".isotope-container").isotope({ filter:filterValue});
	$(this).parent().addClass('active').siblings().removeClass('active');
	return false;
})
//图集过滤事件结束