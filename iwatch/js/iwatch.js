/*****大屏放大镜搜索******/
(function() {
	$('.ac-gn-search').on('click', function() {
		$('html').css('cssText', 'margin-top:0 !important');
		$('.ac-gn-curtain').css('display', 'block');
		$('.ac-gn-list').children('li.ac-gn-item').css('visibility', 'hidden');
		$('.ac-gn-list').children('li.ac-gn-apple').css('visibility', 'inherit');
		$('.ac-gn-searchview').css('display', 'block');
		$('.ac-gn-searchform-input').focus();
	})

	$('.ac-gn-searchview-close').on('click', function() {
		$('html').css('cssText', 'margin-top:40 !important');
		$('.ac-gn-curtain').css('display', 'none');
		$('.ac-gn-list').children('li.ac-gn-item').css('visibility', 'inherit');
		$('.ac-gn-list').children('li.ac-gn-apple').css('visibility', 'inherit');
		$('.ac-gn-searchview').css('display', '');
	})
	$(window).on('resize', function() {
		if($(window).width() <= 767) {
			$('html').css('cssText', 'margin-top:40 !important');
			$('.ac-gn-list').children('li.ac-gn-item').css('visibility', 'inherit');
			$('.ac-gn-list').children('li.ac-gn-apple').css('visibility', 'inherit');
			$('.ac-gn-searchview').css('display', '');
		}
	})
})();

/******小屏导航栏******/
(function() {
	$('.ac-gn-menuicon').on('click', function() {
		if($(this).hasClass('ac-gn-menuicon-active')) {
			$('.ac-gn-list').removeClass('ac-gn-list-small-list');
			$(this).removeClass('ac-gn-menuicon-active');
			$('html').css('cssText', 'margin-top:40 !important');
			$('.ac-globalnav').removeClass('small-shownav');
			$('.ac-gn-bag').css('display', 'block');
		} else {
			$('.ac-gn-list').addClass('ac-gn-list-small-list');
			$(this).addClass('ac-gn-menuicon-active');
			$('html').css('cssText', 'margin-top:0 !important');
			$('.ac-globalnav').addClass('small-shownav');
			$('.ac-gn-bag').css('display', 'none');
		}
		$(window).on('resize', function() {
			if($(window).width() >= 767) {
				$('.ac-gn-list').removeClass('ac-gn-list-small-list');
				$('.ac-gn-menuicon').removeClass('ac-gn-menuicon-active');
				$('html').css('cssText', 'margin-top:40 !important');
				$('.ac-globalnav').removeClass('small-shownav');
				$('.ac-gn-bag').css('display', 'block');
			}
		})
	})
})();

/****小屏搜索****/
(function() {
	$('.ac-gn-search-small').on('click', function() {
		$('.ac-gn-searchview').addClass('ac-gn-searchview-small');
		$('.ac-gn-searchform-input').focus();
	})
	$('.ac-gn-search-close').on('click', function() {
		$('.ac-gn-searchview').removeClass('ac-gn-searchview-small');
	})
	$(window).on('resize', function() {
		if($(window).width() >= 767) {
			$('.ac-gn-searchview').removeClass('ac-gn-searchview-small');
		}

	})

})();
/****小图标翻页***/
(function() {
	if($('.chapternav-items').width() <= 770) {
		$('.chapternav-paddle-right').css('opacity', 1);
	}
	$(window).on('resize', function() {
		if($('.chapternav-items').width() <= 770) {
			$('.chapternav-paddle-right').css('opacity', 1);
		}
		else{
			$('.chapternav-paddle-right').css('opacity', 0);
			$('.chapternav-paddle-left').css('opacity',0);
			$('.chapternav-item').css('transform','translateX(0px)');
		}
	})
	$('.chapternav-paddle-right').on('click', function() {
			if($('.chapternav-items').width() <= 770) {
				$('.chapternav-item').css('transform','translateX('+(-(780-$('.chapternav-items').width()))+'px)');
				$('.chapternav-paddle-left').css('opacity',1);
				$(this).css('opacity',0);
			}
		})
	$('.chapternav-paddle-left').on('click',function(){
		if($('.chapternav-items').width() <= 770){
			$('.chapternav-item').css('transform','translateX(0px)');
			$(this).css('opacity',0);
			$('.chapternav-paddle-right').css('opacity',1);
		}
	})
})();