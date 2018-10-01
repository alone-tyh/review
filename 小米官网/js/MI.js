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
			targetTime=new Date(nowTime.getFullYear(),nowTime.getMonth(),nowTime.getDate(),22);
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
