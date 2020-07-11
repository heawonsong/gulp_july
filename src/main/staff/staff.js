$(document).ready(function(){

    /*
    이벤트 문 안쪽에서의 $(this)--> 내가 이벤트를 발생시킨 바로 그 주체
    $(선택자).index() --> 선택자의 순서값을 구해줌
    */

    $('.tabBox .btns>li').on('click',function(e){
        e.preventDefault();

        var i = $(this).index();
        
        $('.tabBox .btns>li>a').removeClass('on');
        $('.tabBox .btns>li').eq(i).children('a').addClass('on');

        $('.tabBox>div').hide().removeClass('on');
        $('.tabBox>div').eq(i).show();

        setTimeout(function(){
            $('.tabBox>div').eq(i).addClass('on');
        },100);
      
    })
})

/*
스크립트로 on 클래스를 붙여서 박스 보이게 하는것과 자식컨텐츠에 transition모션을 동시에 걸면 모션이 안걸림

--> 약간의 시간차를 벌어줌
1.박스를 스크립트 .hide(), show()로 먼저 열어주고
2.0.1초의 짧은 딜레이시간뒤에 클래스 on을 붙여서 활성화 시킴

스크립트로 딜레이 시간 거는 방법
setTimeout(function(){
    실행할 구문
},딜레이시간)

딜레이시간 이후에 실행구문 호출
*/