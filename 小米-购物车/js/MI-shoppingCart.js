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

/****商品轮播图******/
(function() {
	var nowIndex = -1;
	var time = 0;
	var goNext = function() {
		if(nowIndex < $('.slider').length - 1) {
			nowIndex += 1;
		} else {
			nowIndex = 0;
		}
		$('.slider').css('opacity', 0);
		$('.ui-pager-link').removeClass('ui-pager-link-active');
		$('.slider').eq(nowIndex).css('opacity', 1);
		$('.ui-pager-link').eq(nowIndex).addClass('ui-pager-link-active');
	}
	var goPre = function() {
		if(nowIndex <= 0) {
			nowIndex = $('.slider').length - 1;
		} else {
			nowIndex -= 1;
		}
		$('.slider').css('opacity', 0);
		$('.ui-pager-link').remove('ui-pager-link-active');
		$('.slider').eq(nowIndex).css('opacity', 1);
		$('.ui-pager-link').eq(nowIndex).addClass('ui-pager-link-active');
	}
	$('.ui-pre').on('click', function() {
		goPre();
		time = 0;
	})
	$('.ui-next').on('click', function() {
		goNext();
		time = 0;
	})
	goNext();
	setInterval(function() {
		if(time >= 50) {
			goNext();
			time = 0;
		} else {
			time += 1;
		}
	}, 100);
})();

/***滚动条事件*****/
$(window).on('scroll', function() {
	if($(document).scrollTop() >= 228) {
		$('.product-box.product-box-hidden').addClass('nav-fix');
	} else {
		$('.product-box.product-box-hidden').removeClass('nav-fix');
	}
	if($(document).scrollTop() >= 198) {
		$('.img-con').addClass('fix');
		$('.img-con').css('margin-top', 0);
	} else {
		$('.img-con').removeClass('fix');
	}
	if($(document).scrollTop() >= 298) {
		$('.img-con').removeClass('fix');
		$('.img-con').css('margin-top', 190);
	}
});

/*****地址连选模块*****/
(function() {
	$('.switch-choose-regions').on('click', function() {
		$('.modal-choose-regions').css({
			'left': $('.address-wrap').offset().left,
			'top': $('.address-wrap').offset().top,
			'opacity': 1
		});
		$('.modal-backdrop').css({
			'display': 'block',
			'opacity': 0.5
		});
		$('.modal-choose-regions').css('display', 'block');
		$('.item.sheng').html($('.select-item.sheng').html());
		$('.item.di').html($('.select-item.di').html());
		$('.item.xian').html($('.select-item.xian').html());
	})

	$('.modal-choose-regions').children('span.close').on('click', function() {
		$('.modal-backdrop').css({
			'display': 'none'
		});
		$('.modal-choose-regions').css('display', 'none');
		$('.item.sheng').html($('.select-item.sheng').html());
		$('.item.di').html($('.select-item.di').html());
		$('.item.xian').html($('.select-item.xian').html());
	})

	$('.modal-backdrop').on('click', function() {
		$('.modal-backdrop').css({
			'display': 'none'
		});
		$('.modal-choose-regions').css('display', 'none');
	})

	var sheng = [];
	var di = [];
	var xian = [];
	addressLib.forEach(function(item) {
		if(item.level == 1) {
			sheng.push(item);
		}
		if(item.level == 2 && item.name != "市辖区" && item.name != "县") {
			di.push(item);
		}
		if(item.level == 3 && item.name != "市辖区" && item.name != "县") {
			xian.push(item);
		}
	})

	var str_sheng = '';

	sheng.forEach(function(item) {
		str_sheng += `<li class="option" data-sheng="${item.sheng}">${item.name}</li>`;
	})
	$('.options-list.sheng').html(str_sheng);
	//选择省出现市

	var area = function(data_sheng, data_di) {
		var str_xian = null;
		if(data_di) {
			xian.forEach(function(item) {
				if(item.sheng == data_sheng && item.di == data_di) {
					if(str_xian) {
						str_xian += `<li class="option" data-sheng="${item.sheng}" data-di="${item.di}" data-xian="${item.xian}">${item.name}</li>`;
					} else {
						str_xian = `<li class="option" data-sheng="${item.sheng}" data-di="${item.di}" data-xian="${item.xian}">${item.name}</li>`;
					}

				}
			})
		} else {
			xian.forEach(function(item) {
				if(item.sheng == data_sheng) {
					if(str_xian) {
						str_xian += `<li class="option" data-sheng="${item.sheng}" data-di="${item.di}" data-xian="${item.xian}">${item.name}</li>`;
					} else {
						str_xian = `<li class="option" data-sheng="${item.sheng}" data-di="${item.di}" data-xian="${item.xian}">${item.name}</li>`;
					}
				}
			})
		}
		$('.select-item.xian').removeClass('hide').html('选择区县').removeClass('active');
		$('.options-list.xian').html(str_xian).removeClass('hide');
		$('.options-list.xian').children('li.option').on('click', function() {
			var me_this = this;
			$('.select-item.xian').html($(me_this).html()).addClass('active');
			$('.modal-backdrop').css({
				'display': 'none'
			});
			$('.modal-choose-regions').css('display', 'none');
			$('.item.sheng').html($('.select-item.sheng').html());
			$('.item.di').html($('.select-item.di').html());
			$('.item.xian').html($('.select-item.xian').html());
		})
	}

	var city = function(data_sheng, data_name) {
		var str_di = null;
		di.forEach(function(item) {
			if(item.sheng == data_sheng) {
				if(str_di) {
					str_di += `<li class="option" data-sheng="${item.sheng}" data-di="${item.di}">${item.name}</li>`;
				} else {
					str_di = `<li class="option" data-sheng="${item.sheng}" data-di="${item.di}">${item.name}</li>`;
				}
			}
		});
		if(str_di) {
			$('.select-item.di').removeClass('hide').html('选择城市/地区').removeClass('active');
			$('.options-list.di').html(str_di).removeClass('hide');
			$('.options-list.di').children('li.option').on('click', function() {
				var me_this = this;
				$('.select-item.di').html($(me_this).html()).addClass('active');
				$('.options-list.di').addClass('hide');
				area(data_sheng, $(me_this).attr('data-di'));
			})
		} else {
			$('.select-item.di').html(data_name).addClass('active').removeClass('hide');
			area(data_sheng);
		}
	}
	$('.options-list.sheng').children('li.option').on('click', function() {
		var me_this = this;
		$('.select-item.sheng').html($(me_this).html()).addClass('active');
		$('.options-list.sheng').addClass('hide');
		city($(this).attr('data-sheng'), $(this).html());
	});

	$('.select-item.sheng').on('click', function() {
		$('.options-list').addClass('hide');
		$('.options-list.sheng').removeClass('hide');
		$('.select-item').addClass('hide');
		$(this).html('选择省份/自治区').removeClass('active').removeClass('hide');
	})

	$('.select-item.di').on('click', function() {
		$('.options-list').addClass('hide');
		$('.options-list.di').removeClass('hide');
		$('.select-item').addClass('hide');
		$('.select-item.sheng').removeClass('hide');
		$(this).html('选择城市/地区').removeClass('active').removeClass('hide');
	})

	$('.select-item.xian').on('click', function() {
		$('.options-list').addClass('hide');
		$('.options-list.xian').removeClass('hide');
		$(this).html('选择区县').removeClass('active').removeClass('hide');
	})

})();

/*******版本选择********/
(function() {
	$('.step-list').children('li.btn-biglarge').on('click', function() {
		var me_this = this;
		var data_name = $(me_this).attr('data-name');
		var data_price = $(me_this).attr('data-price');
		$('.step-list').children('li.btn-biglarge').removeClass('active');
		$(this).addClass('active');
		$('.pro-price').children('span.price').html($(me_this).attr('data-price'));
		$('.pro-list').find('li:nth-child(1)').html(`${data_name}<span>${data_price}</span>`)
		$('.pro-list').find('li.totlePrice').html(`总计 ：${data_price}`);
	})

})();

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
		var htmlUrl = window.location.origin + window.location.pathname.replace('/index.html', '/index2.html');
		window.location.href = htmlUrl;
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