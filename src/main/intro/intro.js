$(document).ready(function(){	
   
    $('#intro dt a').on('click focusin',function(e){
        e.preventDefault();

        var target = $(this).attr('href');

        $('#intro dd').hide().removeClass('on');
        $(target).show();
        setTimeout(function(){
            $(target).addClass('on');
        },100);

        $('#intro dt a').removeClass('on');
        $(this).addClass('on');
    });
});