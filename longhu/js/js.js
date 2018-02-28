window.onload = function(){
	var width = $(".vid-kk").width(),
		height = $(".vid-kk").height();
	$(".vid-kk").children('video').attr({
		width:width,
		height:height
	})
   	var a = $("#loading");
    a.fadeOut(500).remove();
}
var menu2x = 1;
var menu3x = 1;
var menu2Text = '<div class="ks"><div class="ks1"><img class="bgImg" src="img/lb6.jpg"/><img src="img/pg1-bg1-icon1.png"/><img src="img/pg1-bg1-icon2.png"/><img class="dosc top-bottom" src="img/pg1-bg6-icon1.png"/><img class="dosc opacity0-1" src="img/pg1-bg6-icon2.png"/></div><div class="ks2"><img src="img/pg3-1-bg.jpg"/><img class="jt" src="img/pg3-1-jian4.png" /><img class="jt" src="img/pg3-1-jian2.png" /><img class="jt" src="img/pg3-1-jian3.png" /><img class="jt" src="img/pg3-1-jian1.png" /><img  class="huxi jt" src="img/pg3-1-huxi.png"/><img class="jt" src="img/pg1-bg5-icon1.png"/><img class="jt" src="img/pg1-bg5-icon2.png"/><img class="jt" src="img/pg1-bg5-icon3.png"/><img class="jt" src="img/pg1-bg5-icon4.png"/></div><div class="ks3"><img src="img/pg1-bg1-icon1.png"/><img src="img/pg1-bg1-icon2.png"/><img class="ggif" style="display: none;" src="img/3z1h.gif"/></div><div class="ks4"><img src="img/pg1-bg1-icon1.png"/><img src="img/pg1-bg1-icon2.png"/><img class="ggif" style="display: none;" src="img/5jiaotong.gif"/></div><img data-url="pg2" class="return navMenu" src="img/return.png"/></div>'
var mySwiper = new Swiper ('.header', {
    loop: true,
    speed:2000,
    effect : 'fade',
    fade: {
	  crossFade: true,
	},
    autoplay: 5000
})
$(".header").click(function(){
	var nextdemo = $('.pg2');
	var predemo = $(this);
	NextPage(predemo,nextdemo,36);
	$(".nav").addClass('action');
})
$(document).on('click',".navMenu",function(){
	var href = $(this).attr('data-url');
	var nextdemo = $('.'+href);
	var predemo = $(".pt-page-current");
	if(!predemo.hasClass(href)){
		if(href === 'pg1'){
			NextPage(predemo,nextdemo,36);
		}else{
			if(href === 'pg4'){
				if($(".center-right .vr").children('iframe').attr('src')==''){
					$(".center-right .vr").children('iframe').attr('src','https://vr.ejudata.com/static/play.html?projectId=59c0888c05f6bc00107c6045&from=singlemessage&isappinstalled=0')
					$(".center-right .vr").fadeIn(500);
				}
			}else if(href === 'pg6'){
				if($(".dud").children('iframe').attr('src') == ''){
					$(".dud").children('iframe').attr('src','src/menu5-2.html');
				}
			}else if(href === 'pg5'){
				/*
				$(".qjsj").remove();
				$('.xjs').remove();
				$(".mek").append('<img class="xjs" style="display:none" src="img/0a.png"/>')
				for (var i=1;i<9;i++) {
					if(i<10){
						$(".mek").append('<img class="xjs" style="display:none" src="img/sh1-'+i+'.png"/>')
					}else{
						$(".mek").append('<img class="xjs" style="display:none" src="img/sh1-'+i+'.png"/>')
					}
				}
				for (var y=1;y<10;y++) {
					(function(x){
			   			setTimeout(function(){
							$('.xjs').eq(x-1).fadeIn(700)
						},(x*900));
			   		})(y)
				}
				menu3x = 2;*/
			}
			NextPage(predemo,nextdemo,1);
		}
	}
})
$(".mes").click(function(){
	var dataUrl = $(this).attr('data-url');
	var dom = $('.'+dataUrl);
	var index = $(this).index();
	alert(index);
	if(dataUrl="ps"){
		if($(".ps").children('iframe').attr('src') == ''){
			$(".ps").children('iframe').attr('src','src/menu5-1.html');
		}
	}
	//$(".menu5 .center").removeClass().addClass('center '+$(this).attr('data-url'));
	$(".sett").removeClass('action').eq(index).addClass('action');
	$(".menu5 .center-right .crs").fadeOut(500);
	dom.fadeIn(500);
})
$(".ptcp").click(function(){
	var href = $(this).attr('data-url');
	var nextdemo = $('.'+href);
	var predemo = $(".pt-page-current");
	if(href === 'pg7'){
		if(nextdemo.children('iframe').attr('src') == ''){
			nextdemo.children('iframe').attr('src','src/menu5-2.html');
		}
	}else if(href === 'pg8'){
		if(nextdemo.children('iframe').attr('src') == ''){
			nextdemo.children('iframe').attr('src','src/menu5-1.html');
		}
	}else if(href === 'pg9'){
		if(nextdemo.children('iframe').attr('src') == ''){
			nextdemo.children('iframe').attr('src','src/menu4-1.html');
		}
	}else if(href === 'pg10'){
		nextdemo.children('iframe').attr('src','src/menu4-2.html');
		if(nextdemo.children('iframe').attr('src') == ''){
//			nextdemo.children('iframe').attr('src','src/menu4-2.html');
		}
	}
	NextPage(predemo,nextdemo,21);
})
$(".ptcpRe").click(function(){
    var href = $(this).attr('data-url');
    var ifreams = $(this).attr('data-next');
	var nextdemo = $('.'+href);
    var predemo = $(".pt-page-current");
    if(ifreams!="" && nextdemo.children("iframe").attr("src")==""){
        nextdemo.children("iframe").attr("src",ifreams)
    }
    if(href === 'pg14'){
        let vSrc = nextdemo.children("video").attr("src");
        if(vSrc === ""){
            nextdemo.children("video").attr("src","css/szyh.mp4");
        }
        nextdemo.children("video")[0].play();
    }
    if($(this).hasClass("videosk")){
        $(this).prevAll("video")[0].pause();
    }
	NextPage(predemo,nextdemo,21);
})
$(".mess").click(function(){
	var dataUrl = $(this).attr('data-url');
	var dom = $('.'+dataUrl);
	var index = $(this).index();
	if(dataUrl!="video"){
		$(".vid-kk").children('video')[0].pause();
		if(dataUrl=="pic"){
			console.log('dm')
			if($(".pic").children('iframe').attr('src') == ''){
				$(".pic").children('iframe').attr('src','src/menu3.html');
				console.log('mm')
			}
		}
	}
	//$(".menu3 .center").removeClass().addClass('center '+$(this).attr('data-url'));
	$(".sett").removeClass('action').eq(index).addClass('action');
	$(".menu3 .center-right .crs").fadeOut(0);
	dom.fadeIn(500);
})
//视频播放
$(".vid-kk").click(function(){
	$(this).children('video').attr({
		controls:'controls'
	})
	$(".vid-kk .poster").css('display','none');
	$(this).children('video')[0].play();
})
//全屏
var qpx = 1;
/*
$(".qpsc").click(function(){
	var fream = $(this).next('iframe');
	var xxleft = parseFloat($(".buk").css('left'));
	var xxtop = parseFloat($(".buk").css('top'));
	var left = fream.offset().left-xxleft;
	var top = fream.offset().top-xxtop;
	var width = $("body").width();
	var height = $("body").height();
	var widthx = fream[0].offsetWidth;
	var heightx = fream[0].offsetHeight;
	if(qpx == 1){
		$(this).css({
			'position':'fixed',
			'background-image':'url(img/return.png)',
			'width':width*0.07,
			'height':height*0.0537
		})
		fream.css({
			'position':'fixed',
			'transform':'translate('+(-left)+'px,'+(-top)+'px)',
			'-webkit-transform':'translate('+(-left)+'px,'+(-top)+'px)',
			'-moz-transform':'translate('+(-left)+'px,'+(-top)+'px)',
			'-o-transform':'translate('+(-left)+'px,'+(-top)+'px)',
			'width':width,
			'height':height
		})
		qpx = 2;
	}else{
		$(this).css({
			'position':'absolute',
			'background-image':'url(img/Unknown-2.svg)'
		})
		fream.css({
			'transform':'translate('+(0)+'px,'+(0)+'px)',
			'-webkit-transform':'translate('+(0)+'px,'+(0)+'px)',
			'-moz-transform':'translate('+(0)+'px,'+(0)+'px)',
			'-o-transform':'translate('+(0)+'px,'+(0)+'px)',
			'width':'100%',
			'height':'100%',
			'position':''
		})
		qpx = 1;
	}
})*/

$(".qpsc").click(function(){
	var fream = $(this).next('iframe');
	var xxleft = parseFloat($(".buk").css('left'));
	var xxtop = parseFloat($(".buk").css('top'));
	var left = fream.offset().left-xxleft;
	var top = fream.offset().top-xxtop;
	var width = $("body").width();
	var height = $("body").height();
	var widthx = fream[0].offsetWidth;
	var heightx = fream[0].offsetHeight;
	$(this).css('z-index','-1');
	var that = $(this);
	setTimeout(function(){
		that.nextAll('.qpsa').css({
			'display':'block',
			'position':'fixed',
			'bottom':'20px',
			'top':'auto',
			'left':'20px',
			'width':width*0.075,
			'height':"auto"
		});
		$(".pg4 .logos").css("display",'block');
	},500)
	fream.css({
		'position':'fixed',
		'transform':'translate('+(-left)+'px,'+(-top)+'px)',
		'-webkit-transform':'translate('+(-left)+'px,'+(-top)+'px)',
		'-moz-transform':'translate('+(-left)+'px,'+(-top)+'px)',
		'-o-transform':'translate('+(-left)+'px,'+(-top)+'px)',
		'width':width,
		'height':height,
		'z-index':9
	})
})
$(".qpsa").click(function(){
	$(".pg4 .logos").css("display",'none')
	$(this).prevAll('.qpsc').css('z-index',11)
	$(this).css('display','none');
	$(this).prev('iframe').css({
		'transform':'translate('+(0)+'px,'+(0)+'px)',
		'-webkit-transform':'translate('+(0)+'px,'+(0)+'px)',
		'-moz-transform':'translate('+(0)+'px,'+(0)+'px)',
		'-o-transform':'translate('+(0)+'px,'+(0)+'px)',
		'width':'100%',
		'height':'100%',
		'position':''
	})
})
//生活
$(".mekk").click(function(){
	if(menu3x == 1){
		$(".qjsj").remove();
		$(this).append('<img class="xjs" style="display:none" src="img/0a.png"/>')
		for (var i=1;i<9;i++) {
			if(i<10){
				$(this).append('<img class="xjs" style="display:none" src="img/sh1-'+i+'.png"/>')
			}else{
				$(this).append('<img class="xjs" style="display:none" src="img/sh1-'+i+'.png"/>')
			}
		}
		for (var y=1;y<10;y++) {
			(function(x){
	   			setTimeout(function(){
					$('.xjs').eq(x-1).fadeIn(700)
				},(x*900));
	   		})(y)
		}
		menu3x = 2
	}else if(menu3x == 2){
		$('.xjs').fadeOut(500).remove();
		for (var i=1;i<12;i++) {
			$(this).append('<img class="qjsj" style="display:none" src="img/qjsj-'+i+'.png"/>')
		}
		for (var y=1;y<12;y++) {
			(function(x){
	   			setTimeout(function(){
					$('.qjsj').eq(x-1).fadeIn(700)
				},(x*900));
	   		})(y)
		}
		menu3x = 1
	}
	
})
//粒子效果
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 70,
            "density": {
                "enable": true,
                "value_area": 900
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 2
            }
        },
        "opacity": {
            "value": 0.3,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 10,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 200,
            "color": "#fff",
            "opacity": 0.1,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 800,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 800,
                "size": 80,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": false
});
//粒子效果
particlesJS("particles-js1", {
    "particles": {
        "number": {
            "value": 40,
            "density": {
                "enable": true,
                "value_area": 900
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 2
            }
        },
        "opacity": {
            "value": 0.1,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 10,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 200,
            "color": "#fff",
            "opacity": 0.1,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 800,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 800,
                "size": 80,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": false
});
//粒子效果
particlesJS("particles-js2", {
    "particles": {
        "number": {
            "value": 40,
            "density": {
                "enable": true,
                "value_area": 900
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 2
            }
        },
        "opacity": {
            "value": 0.1,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 10,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 200,
            "color": "#fff",
            "opacity": 0.1,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 800,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 800,
                "size": 80,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": false
});
