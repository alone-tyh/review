/*********购物车界面**********/
(function() {
	$('#topbar-cart').hover(
		function() {
			$(this).addClass('topbar-cart topbar-cart-active');
			$('.cart-menu').html('<div class="loading">购物车中还没有商品，赶紧选购吧！</div>')
			$('.cart-menu').slideDown(400);

		},
		function() {
			$(this).removeClass('topbar-cart-active');
			$('.cart-menu').slideUp(400);
		}
	)
})();

/*****头部导航菜单**********/
(function() {
	var time = null;
	$('.nav-item').on("mouseenter", function() {
		clearTimeout(time);
		$('.nav-item').children("a.link").css("color", "#333333");
		$(this).addClass("nav-item-active").css("box-shadow", "none").children("a.link").css("color", "#FF6700");
		if($(this).children("div").length > 0) {
			$(".header-nav-menu").html($(this).find("div.item-children").html());
			$('.header-nav-menu').addClass("header-nav-menu-active").slideDown("slow");
		} else {
			$('.header-nav-menu').removeClass("header-nav-menu-active").slideUp("slow");
		}
	})
	$(".header-nav-menu").on("mouseenter", function() {
		clearTimeout(time);
	})
	$(".header-nav-menu").on('mouseleave', function() {
		$('.nav-item').children("a.link").css("color", "#333333");
		time = setTimeout(function() {
			$('.header-nav-menu').removeClass("header-nav-menu-active").slideUp("slow");
		}, 200)
	})
	$('.nav-item').on('mouseleave', function() {
		var me = $(this)
		time = setTimeout(function() {
			$('.header-nav-menu').removeClass("header-nav-menu-active").slideUp("slow");
			me.removeClass('nav-item-active').children("a.link").css("color", "#333333");
		}, 200)

	})
})();

(function() {
	var img_item = document.getElementsByClassName("img-item");
	var index = 0;
	var btn_pre = document.getElementsByClassName("btn-pre")[0];
	var btn_next = document.getElementsByClassName("btn-next")[0];
	var point = document.getElementsByClassName('point');
	var time = 0;

	var goNext = function() {
		if(index < img_item.length - 1) {
			index++;
		} else {
			index = 0;
		}
		goIndex();
		return false;
	}

	var goPre = function() {
		if(index == 0) {
			index = img_item.length - 1;
		} else {
			index--;
		}
		goIndex();
		return false;
	}

	var clearActive = function() {
		for(var i = 0; i < img_item.length; i++) {
			img_item[i].className = 'img-item';
		}
	}

	var clearPointActive = function() {
		//	console.log('aaa');
		for(var i = 0; i < point.length; i++) {
			point[i].className = 'point';
		}
	}

	var goIndex = function() {
		clearActive();
		img_item[index].className = 'img-item active';
		clearPointActive();
		point[index].className = 'point point-active';
	}

	for(var i = 0; i < point.length; i++) {
		point[i].addEventListener('click', function(j) {
			return function() {
				index = j;
				goIndex();
				clearPointActive();
				point[j].className = 'point point-active';
				time = 0;
			}
		}(i))
	}

	var img_itme_time = setInterval(function() {
		if(time == 50) {
			goNext();
			time = 0;
		} else {
			time++;
		}
	}, 40)

	btn_pre.addEventListener('click', goPre);
	btn_next.addEventListener('click', goNext);
})();

/***********全部商品菜单*********/
(function() {
	$('.menu-item').on('mouseenter', function() {
		$(this).children('div.children').css('display', 'block');
	})
	$('.menu-item').on('mouseleave', function() {
		$(this).children('div.children').css('display', 'none');
	})
})();

/*** 闪购***/
(function() {
	var item_wrap = document.getElementById('item-wrap');
	var control_pre = document.getElementsByClassName('control-pre')[0];
	var control_next = document.getElementsByClassName('control-next')[0];
	var control_active = document.getElementsByClassName('control-active')[0];

	var wrap_position = 0;

	var goPosition = function() {
		item_wrap.style.marginLeft = wrap_position + 'px';
	}

	var moveNext = function() {
		if(wrap_position == 0) {
			wrap_position = -992;
			control_next.className = 'control control-next';
			control_pre.className = 'control control-pre control-active';
			goPosition();
		}
	}

	var movePre = function() {
		if(wrap_position == -992) {
			wrap_position = 0;
			control_next.className = 'control control-next control-active';
			control_pre.className = 'control control-pre';
			goPosition();
		}
	}

	control_pre.addEventListener('click', movePre);
	control_next.addEventListener('click', moveNext);
	
	
	var objTime=setInterval(function(){
		var nowTime=new Date();
		var targetTime=new Date(nowTime.getFullYear(),nowTime.getMonth(),nowTime.getDate(),22);
//		console.log("now"+nowTime.toString());
//		console.log("target"+targetTime.toString())
		var timeValue=targetTime.getTime()-nowTime.getTime();
//		console.log(timeValue);
		if(timeValue>=0){
			var hour=parseInt(timeValue/1000/60/60);
			var min=parseInt(timeValue/1000/60-(hour*60));
			var sec=parseInt(timeValue/1000-(hour*60+min)*60);
			$('.box-hour').html(hour<10?"0"+hour:hour);
			$('.box-min').html(min<10?"0"+min:min);
			$('.box-sec').html(sec<10?"0"+sec:sec);
		}
		else{
			targetTime.setDate(nowTime.getDate()+1);
            timeValue=targetTime.getTime()-nowTime.getTime();
			var hour=parseInt(timeValue/1000/60/60);
			var min=parseInt(timeValue/1000/60-(hour*60));
			var sec=parseInt(timeValue/1000-(hour*60+min)*60);
			$('.box-hour').html(hour<10?"0"+hour:hour);
			$('.box-min').html(min<10?"0"+min:min);
			$('.box-sec').html(sec<10?"0"+sec:sec);
		}
	},900)
})();

/****分类切换*********/
(function(){
	$('.tab-list').children("li").on("mouseenter",function(){
			$(this).parent().children().removeClass("tab-active");
			$(this).addClass("tab-active");
			$(this).parents('div.home-brick-box').find('ul.tab-content').removeClass('tab-content-active');
			$(this).parents('div.home-brick-box').find('ul.tab-content').eq($(this).parent().children().index($(this))).addClass('tab-content-active')
		}
	)
})();

/****隐藏标签展示*****/
(function(){
	$('.brick-item-m').hover(
		function(){
		$(this).addClass('brick-item-m-active');
	},
	function(){
		$(this).removeClass('brick-item-m-active');
	}) 
})();


/*********为你推荐翻页*******/
(function(){
	
	$('.home-recm-box').find('a.control-pre').on('click',function(){
		var nowmargin=parseInt($('.carousel-list').css("margin-left"));
		if(nowmargin>=0){
			$('.control').removeClass('control-disabled');
			$('.control-pre').addClass('control-disabled');
		}
		else{
			$('.control').removeClass('control-disabled');
			$('.carousel-list').css('margin-left',nowmargin+1240);
			if((nowmargin+1240)%1240!=0){                  //防止加速过快导致位置错乱
				$('.carousel-list').css('margin-left',parseInt((nowmargin+1240)/1240)*(1240));
			}
			if(nowmargin+1240>=0){
				$('.control').removeClass('control-disabled');
			    $('.control-pre').addClass('control-disabled');
			    $('.carousel-list').css('margin-left',0);
			}
		}
	})
	$('.home-recm-box').find('a.control-next').on('click',function(){
		var nowmargin=parseInt($('.carousel-list').css("margin-left"));
		if(nowmargin<=-3720){
			$('.control').removeClass('control-disabled');
			$('.control-next').addClass('control-disabled');
		}
		else{
			$('.control').removeClass('control-disabled');
			$('.carousel-list').css('margin-left',nowmargin-1240);
			if((nowmargin-1240)%1240!=0){                   //防止加速过快导致位置错乱     多减1为了连续点击出现卡顿的情况
				$('.carousel-list').css('margin-left',parseInt((nowmargin-1240)/1240-1)*(1240));
			}
			if(nowmargin-1240<=-3720){
				$('.control').removeClass('control-disabled');
			    $('.control-next').addClass('control-disabled');
			    $('.carousel-list').css('margin-left',-3720);
			}
		}
	})
})();
/*********内容翻页*********/
(function(){
	$('.home-content-box').find('a.control-pre').on('click',function(){
		var this_ul=$(this).parent().siblings('div.carousel-wrapper').children('ul.item-list')
		var nowmargin=parseInt(this_ul.css('margin-left'));
		if(nowmargin<=0){
			nowmargin+=296;
			if((nowmargin)%296!=0){
				nowmargin=parseInt(nowmargin/296)*296;
			}
			if(nowmargin>=0){
				nowmargin=0
			}
			this_ul.css('margin-left',nowmargin);
		}
		$(this).parent().siblings('div.pagers-wrapper').find('li').removeClass('pager-active');
		$(this).parent().siblings('div.pagers-wrapper').find('li').eq(Math.abs(nowmargin/296)).addClass('pager-active')
		
	})
	$('.home-content-box').find('a.control-next').on('click',function(){
		var this_ul=$(this).parent().siblings('div.carousel-wrapper').children('ul.item-list')
		var nowmargin=parseInt(this_ul.css('margin-left'));
		if(nowmargin>=(this_ul.children('li').length-1)*-296){
			nowmargin-=296;
			if(nowmargin%296!=0){
				nowmargin=parseInt(nowmargin/296-1)*296;
			}
			if(nowmargin<=(this_ul.children('li').length-1)*-296){
				nowmargin=(this_ul.children('li').length-1)*-296;
			}
			this_ul.css('margin-left',nowmargin);
		}
		$(this).parent().siblings('div.pagers-wrapper').find('li').removeClass('pager-active');
		$(this).parent().siblings('div.pagers-wrapper').find('li').eq(Math.abs(nowmargin/296)).addClass('pager-active')
	})
})();


/******侧栏条响应******/
(function(){
	var w=document.documentElement.clientWidth||document.body.clientWidth;
	    if(w>=1460){
	    	$('.home-right-bar').removeClass('home-right-bar-show-s');
	    	$('.bar-s').css('display','none');
	    	$('.bar-l').css('display','block');
	    }
	    else{
	    	$('.home-right-bar').addClass('home-right-bar-show-s');
	    	$('.bar-s').css('display','block');
	    	$('.bar-l').css("display",'none');
	    }
	window.onresize=function(){
		var w=document.documentElement.clientWidth||document.body.clientWidth;
	     if(w>=1460){
	    	$('.home-right-bar').removeClass('home-right-bar-show-s');
	    	$('.bar-s').css('display','none');
	    	$('.bar-l').css('display','block');
	    }
	    else{
	    	$('.home-right-bar').addClass('home-right-bar-show-s');
	    	$('.bar-s').css('display','block');
	    	$('.bar-l').css("display",'none');
	    }
	}
	
	$(window).on('scroll',function(){
		if($(window).scrollTop()>=100){
			$('.bar-totop').css('display','block');
		}
		else{
			$('.bar-totop').css('display','none');
		}
//		console.log($(window).scrollTop());
	})

})();
