$(function () {
	// 我们的优势右边按钮
	$('#advantageMain .sloganList').on('mouseover',function(){
		$('.textBoradBox p').css('transform','translateY(0px)');
	}).on('mouseout',function(){
		$('.textBoradBox p').css('transform','translateY(112px)');
	})
	// 他们有话说下部分说的话
	$('.somethingImg').on('mouseover',function(){
		var index=$('.somethingImg').index($(this));
		$('.saySomething').eq(index).css('width','1117px');
	}).on('mouseout',function(){
		$('.someThingToSay .saySomething').css('width','0px');
	})
	// 一起成长图片轮播
	var marginLeft=0;
	$('.growTogether .leftArrow').on('click',function(){
		marginLeft+=201;
		$('.togetherContent ul').css('marginLeft',marginLeft+'px');
		if(marginLeft>=0){
			$('.growTogether .leftArrow').fadeOut(500);
		}
		if(marginLeft>=-603){
			$('.growTogether .rightArrow').fadeIn(500);
		}
	})
	$('.growTogether .rightArrow').on('click',function(){
		marginLeft-=201;
		$('.togetherContent ul').css('marginLeft',marginLeft+'px');
		if(marginLeft<0){
			$('.growTogether .leftArrow').fadeIn(500);
		}
		if(marginLeft<=-603){
			$('.growTogether .rightArrow').fadeOut(500);
		}
	})
})

$(window).scroll(function(){
	var topHeight=$(document).scrollTop()+$(window).height();
	// 我们擅长模块的动画
	if(topHeight>$('#goodAtMain ul').offset().top){
		$('#goodAtMain ul li').find('img').addClass('addEffect');
	}
	// 我们的优势左边建筑
	if(topHeight>$('.building').offset().top){
		$('.building').css('animation','getUp2 0.5s ease');
	}

	// 他们有话说上部分图片动画
	if(topHeight>$('.somethingImg').offset().top){
		$('.somethingImg').addClass('addEffect');
	}
	// 一起成长图片动画
	if(topHeight>$('.togetherContent').offset().top){
 		$(".togetherContent li").find("img").eq(0).css("animation-delay","0.1s");
		$(".togetherContent li").find("img").eq(1).css("animation-delay","2.5s");
		$(".togetherContent li").find("img").eq(2).css("animation-delay","0.3s");
		$(".togetherContent li").find("img").eq(3).css("animation-delay","1.9s");
		$(".togetherContent li").find("img").eq(4).css("animation-delay","0.7s");
		$(".togetherContent li").find("img").eq(5).css("animation-delay","0.9s");
		$(".togetherContent li").find("img").eq(6).css("animation-delay","1.5s");
		$(".togetherContent li").find("img").eq(7).css("animation-delay","2.7s");
		$(".togetherContent li").find("img").eq(8).css("animation-delay","2.3s");
		$(".togetherContent li").find("img").eq(9).css("animation-delay","1.3s");
		$(".togetherContent li").find("img").eq(10).css("animation-delay","1.7s");
		$(".togetherContent li").find("img").eq(11).css("animation-delay","0.2s");
		$(".togetherContent li").find("img").eq(12).css("animation-delay","0.5s");
		$(".togetherContent li").find("img").eq(13).css("animation-delay","1.1s");
		$(".togetherContent li").find("img").eq(14).css("animation-delay","2.1s");
		$('.togetherContent ul li').find('img').addClass('addEffect');
	}
	// 商家注册 数字变化
	if(topHeight>$('.register p span').offset().top){
		var registerNum=0;
		var setTimeId=0;
		if($('.register p span').text()!=3658){
			setTimeId=setTimeout(changeNum,10);
		}	
		function changeNum(){		
			if(registerNum>=3658){
				clearTimeout(setTimeId);
			}else{			
				registerNum+=40;//3680
				registerNum>3658?registerNum=3658:registerNum;
				$('.register p span').text(registerNum);
				setTimeId=setTimeout(changeNum,10);
			}		
		}
	}

	if($(document).scrollTop()>100){
		$('.backTop').fadeIn();
		$('.contactService').fadeIn(500);
	}else{
		$('.backTop').fadeOut();
		$('.contactService').fadeOut(500);
	}
})