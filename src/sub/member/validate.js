$(document).ready(function(){

    $('#join').on('submit',function(e){
        e.preventDefault();

        var agreed = $('#terms').is(':checked');
        var len = $('.required').length;
        var pwd = $('#pwd').val();
        var pwd2 = $('#pwd2').val();
        var radio = $('input[name=gender]').is(':checked');
        var isRequired = false;
        var isPwd = false;
        var isGender = false;
        var i=0;

        $('textarea, input, td').removeClass('red');
                
        if(!agreed){
            alert('약관을 동의해 주세요.');
            $('.agreement textarea').addClass('red');
        }else{
            
            //필수 텍스트 입력사항 반복문으로 체크
            $('.required').each(function(index){
                var data = $(this).val();
                var txt = $(this).attr('placeholder');
                
                if(!data){
                    alert(txt);
                    $(this).addClass('red');
                }else{
                    i++;
                }
            });

            if(i==len){
                isRequired = true;
            }

            //비밀번호 값이 같은지 체크
            if(pwd !== pwd2){
                alert('비밀번호를 동일하게 입력해주세요.');
                $('#pwd, #pwd2').addClass('red');
            }else{
                isPwd = true;   
            }

            //라디오버튼 체크
            if(!radio){
                alert('성별을 선택해주세요.');
                $('input[name=gender]').parent('td').addClass('red');
            }else{
                isGender = true;               
            }

            //최종인증처리
            if(isRequired && isPwd && isGender){
                alert('회원가입이 완료되었습니다.');

                $('.required').val('');
                $('#terms').prop('checked',false);
                $('input[name=gender]').prop('checked',false);
            }            
        }
    })
});


/*

(사용자가 약관을 체크하지 않을때){
    약관동의 경고창
    사용자 약관부분을 빨간색으로 강조
}else{   
    //필수 텍스트입력사항 (.required) 반복돌면서 체크--> isRequired = true;
    //두개의 비밀번호값을 비교해서 같으면 --> isPwd = true;
    //라디오버튼 체크 --> isGender = true;
    //isRequired, isPwd, isGender 의 값들이 모두 true이면 회원인증 완료처리
}

*/