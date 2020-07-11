$(document).ready(function(){	

    // header영역에 마우스오버, 아웃시 서브메뉴, 패널 보이기/숨기기
    $('#header_sub').on('mouseenter', function(){
        $('#gnb').find('ul').stop().slideDown();
        $('.bgGnb').stop().slideDown();
    })
    $('#header_sub').on('mouseleave', function(){
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

});