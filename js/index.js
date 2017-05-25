$(function(){
	// 首圖調整高度
	$(window).on('load resize change',function(){
	$('header').height($(window).height());
	})
	// 首圖調整高度結束
	// top按鈕
	$(window).on('scroll',function(){
		if($(window).scrollTop()>400){
		$('.totop').fadeIn();
		}else{
			$('.totop').fadeOut();
		}
			
		})
		$(".totop").click(function() {
		$("html,body").animate({scrollTop : 0}, 300);
	})
	// 漢堡選單開啟
	$('.hamberger').on('click',function(){
	$('body').toggleClass('menuOpen');
	})
	// 漢堡選單開啟結束
	// 進度條寬度
	$('.progressBar div').each(function(){
		$(this).css({width:$(this).data('w')+'%'});
		
	})
	//進度條寬度結束
	//作品集浮動簡介
	$('a[data-info]').on('mouseover',function(e){
		$('body').append('<div class="dataInfo">'+$(this).data('info')+'</div>')
		$('.dataInfo').css({top:e.pageY+10+'px',left:e.pageX +10+'px'})
	}).on('mousemove',function(e){
		$('.dataInfo').css({top:e.pageY+10+'px',left:e.pageX +10+'px'})
	}).on('mouseleave',function(){
		$('.dataInfo').remove()
	})
	//作品集浮動簡介結束
	//滾動卷軸
	$('.TAG').on('click',function(){
		var target = $(this).attr('href');
		$('body').animate({scrollTop:$(target).offset().top}).removeClass('menuOpen');
	})
	//滾動卷軸結束
	//第二層menu開啟
	$('#menuBar li').not('.TAG').on('click',function(){
		$(this).toggleClass('menushow');
	})
	//第二層menu開啟結束
	// 首頁箭頭效果
	$('#arrow').on('click',function(){
		$('body').animate({scrollTop:$('#useSkill').offset().top}).removeClass('menuOpen')
	})
	// 首頁箭頭效果結束
})