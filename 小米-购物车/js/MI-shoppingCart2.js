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
/***********全部商品菜单*********/
(function() {
	$('.menu-item').on('mouseenter', function() {
		$(this).children('div.children').css('display', 'block');
	})
	$('.menu-item').on('mouseleave', function() {
		$(this).children('div.children').css('display', 'none');
	})
})();

/*********购物车********/

var setStorage = function(key, value) {
	if(!window.localStorage) {
		alert('该浏览器不支持localstorage');
		return false;
	} else {
		var storage = window.localStorage;
		storage.setItem(key, value);
	}
};

var getStorage = function(key) {
	if(!window.localStorage) {
		alert('该浏览器不支持localstorage');
		return false;
	} else {
		var storage = window.localStorage;
		return storage.getItem(key);
	}
};

var removeStorage = function(key) {
	if(!window.localStorage) {
		alert('该浏览器不支持localstorage');
		return false;
	} else {
		var storage = window.localStorage;
		storage.removeItem(key);
	}
};

var cartUpdata = function() {
	if(getStorage('cartInfo')) {
		var cartInfo = JSON.parse(getStorage('cartInfo'));
		if(cartInfo.length > 0) {
			var str_start = `<ul class="cart-list">`;
			var str_end = `</ul>
						<div class="cart-total clearfix">
							<span class="total">
								共<em>1</em>件商品
								<span class="price">
									<em>7999</em>
									元
								</span>
							</span>
							<a href="#" class="btn-cart">去购物车结算</a>
						</div>`;
			var str_content = '';
			var total_num = 0;
			var total_price = 0;
			cartInfo.forEach(function(item) {
				str_content += `<li>
								<div class="cart-item clearfix">
									<a href="#" class="thumb">
										<img src="${item.data_img}"/>
									</a>
									<a href="#" class="name">${item.data_name}</a>
									<span class="price">${item.data_price}元 × ${item.num}</span>
									<a href="javascript:" class="btn-del">
										<i class="iconfont"></i>
									</a>
								</div>
							</li>`;
				total_num += item.num;
				total_price += item.data_price * item.num;
			})
			$('.cart-menu').html(str_start + str_content + str_end);
			$('.cart-mini-num').html(`(${total_num})`);
			$('.cart-total').children('span.total').children('em').html(total_num);
			$('.cart-total').find('span.price').children('em').html(total_price);
			$('.cart-mini').css({
				'background': '#ff6700',
				'color': '#ffffff'
			}).children('i.iconfont').html('');
			$('.cart-menu').find('a.btn-del').on('click', function() {
				var delIndex = null;
				var me_this = this;
				cartInfo.forEach(function(item, index) {
					if(item.data_name == $(me_this).siblings('a.name').html()) {
						item.num -= 1;
						if(item.num <= 0) {
							delIndex = index;
							return
						}
					}
				})
				if(typeof(delIndex)=='number') {
					cartInfo.splice(delIndex, 1);
				}
				setStorage('cartInfo', JSON.stringify(cartInfo));
				cartUpdata();
			})
		} else {
			$('.cart-menu').html('<div class="loading">购物车中还没有商品，赶紧选购吧！</div>')
			$('.cart-mini').css({
				'background': '',
				'color': ''
			}).children('i.iconfont').html('');
			$('.cart-mini-num').html(`(0)`);
		}

	}
};

cartUpdata();

/*******购物车添加********/
(function() {
	$('.btn-primary').on('click', function() {
		var me_name = $('.step-list').children('li.active').attr('data-name');
		var me_price = parseInt($('.step-list').children('li.active').attr('data-price'));
		if(getStorage('cartInfo')) {
			var cartInfo = JSON.parse(getStorage('cartInfo'));
			var isSame = false;
			cartInfo.forEach(function(item) {
				if(item.data_name == me_name && item.data_price == me_price) {
					item.num += 1;
					isSame = true;
				}
			})
			if(!isSame) {
				cartInfo.push({
					'data_name': me_name,
					'data_img': 'https://i1.mifile.cn/a1/pms_1533196200.13174382.jpg?width=60&height=60',
					'data_price': me_price,
					'num': 1
				});
			}
			setStorage('cartInfo', JSON.stringify(cartInfo));
			cartUpdata();
		} else {
			var cartInfo = [{
				'data_name': me_name,
				'data_img': 'https://i1.mifile.cn/a1/pms_1533196200.13174382.jpg?width=60&height=60',
				'data_price': me_price,
				'num': 1
			}]
			setStorage('cartInfo', JSON.stringify(cartInfo));
			cartUpdata();
		}
	})
})();

/*********购物车界面**********/

(function() {
	$('#topbar-cart').hover(
		function() {
			if(getStorage('cartInfo')) {
				cartUpdata();
			} else {
				$('.cart-menu').html('<div class="loading">购物车中还没有商品，赶紧选购吧！</div>')
			}
			$(this).addClass('topbar-cart topbar-cart-active');
			$('.cart-menu').slideDown(400);

		},
		function() {
			$(this).removeClass('topbar-cart-active');
			$('.cart-menu').slideUp(400);
		}
	)
})();


/*****返回上一级******/
(function(){
	$('.btn-line-gray').on('click',function(){
		var htmlUrl=window.location.origin+window.location.pathname.replace('/index2.html','/index.html');
		window.location.href=htmlUrl;
	})
})();
