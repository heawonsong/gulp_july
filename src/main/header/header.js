$(document).ready(function(){	

    // header영역에 마우스오버, 아웃시 서브메뉴, 패널 보이기/숨기기
    $('#header').on('mouseenter', function(){
        $('#gnb').find('ul').stop().slideDown();
        $('.bgGnb').stop().slideDown();
    })
    $('#header').on('mouseleave', function(){
        $('#gnb').find('ul').stop().slideUp();
        $('.bgGnb').stop().slideUp();
    })
    
    //개별적인 GNB메뉴에 마우스 오버시 1depth메뉴 활성화 유지
    $('#gnb>li').on('mouseenter', function(){
        $(this).children('a').addClass('on');
    })

    $('#gnb>li').on('mouseleave', function(){
        $(this).children('a').removeClass('on');
    })

    //a태그에 포커스 이동시 서브메뉴, 패널 보이기/숨기기
    $('#gnb>li>a').on('focusin', function(){
        $('#gnb>li>ul').stop().slideDown();
        $('.bgGnbl').stop().slideDown();
    })

    $('#gnb a').last().on('focusout',function(){
        $('#gnb').find('ul').stop().slideUp();
        $('.bgGnb').stop().slideUp();
    });


    // skip_navi활성화
    $('#skip_navi a').on('focusin',function(){
        $(this).addClass('on');
    });

    $('#skip_navi a').on('focusout',function(){
        $(this).removeClass('on');
    });

    var pos1 = $('.box1').offset().top;
	var pos2 = $('.box2').offset().top;
	var pos3 = $('.box3').offset().top;
	var pos4 = $('.box4').offset().top;
	var base = -300;
	
	$(window).on('scroll',function(){
		var scroll = $(this).scrollTop();

		if(scroll >= pos1+base && scroll < pos2+base){
			$('#scroll_navi li').removeClass('on');
			$('#scroll_navi li').eq(0).addClass('on');
			$('#wrap>div').removeClass('on');
			$('#wrap>div').eq(0).addClass('on');
		}
		if(scroll >= pos2+base && scroll < pos3+base){
			$('#scroll_navi li').removeClass('on');
			$('#scroll_navi li').eq(1).addClass('on');
			$('#wrap>div').removeClass('on');
			$('#wrap>div').eq(1).addClass('on');
		}
		if(scroll >= pos3+base && scroll < pos4+base){
			$('#scroll_navi li').removeClass('on');
			$('#scroll_navi li').eq(2).addClass('on');
			$('#wrap>div').removeClass('on');
			$('#wrap>div').eq(2).addClass('on');
		}
		if(scroll >= pos4+base ){
			$('#scroll_navi li').removeClass('on');
			$('#scroll_navi li').eq(3).addClass('on');
			$('#wrap>div').removeClass('on');
			$('#wrap>div').eq(3).addClass('on');
		}
	});

    $('#scroll_navi li').on('click',function(){
		var i = $(this).index();
		var target = $('#wrap>div').eq(i).offset().top;		
		$('html,body').stop().animate({scrollTop : target},1000);
		
	});
});
