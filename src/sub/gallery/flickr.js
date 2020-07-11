$(document).ready(function(){

    //검색량이 많은 이미지를 호출하는 주소값
    var url_interests = 'https://www.flickr.com/services/rest/?method=flickr.interestingness.getList';

    //특정 키워드를 통해서 이미지를 호출하는 주소값
    var url_search = 'https://www.flickr.com/services/rest/?method=flickr.photos.search';

    //플릭커 api를 호출하기 위한 개인정보 key값 (해당 공유 X)
    var key = 'd69048167ca6c72016984e192bdd54d8';

    //화면 로딩시 검색량 많은 이미지 호출
    $.ajax({
        url : url_interests, //요청할 검색주소
        dataType : 'json',
        data : {
            api_key : key,
            per_page : 5, //검색할 이미지 갯수
            //tags : 'cat', //검색할 태그명
            tagmode : 'any',
            privacy_filter : 5,
            format : 'json',
            nojsoncallback : 1
        }
    })
    .success(function(data){
        console.log(data.photos.photo);
        var items = data.photos.photo;
        
        $(items).each(function(){
            var afterStr =this.title.substring(this.title.lastIndexOf(",")+1);
            $('#gallery_pic ul').append(
                $('<li>')
                    .append(
                        $('<img id="bg">').attr({src:'https://farm'+this.farm+'.staticflickr.com/'+this.server+'/'+this.id+'_'+this.secret+'_m.jpg'})
                    )
                    .append(
                        $('<a>').attr({href:'https://farm'+this.farm+'.staticflickr.com/'+this.server+'/'+this.id+'_'+this.secret+'_b.jpg'})
                        .append('view')
                    )
                    .append(
                        $('<h2>').text(afterStr)
                    )
            )
        })
    })
    .error(function(){
        alert('Fail to Load data!!');
    });



    //키워드 입력후 검색버튼 클릭시 해당 검색내용 다시 출력
    $('#searchBox button').on('click',function(){
        var tag = $('.tag').val();
        $('#gallery_pic ul').empty();
        $.ajax({
            url : url_search, //요청할 검색주소
            dataType : 'json',
            data : {
                api_key : key,
                per_page : 5, //검색할 이미지 갯수
                tags : tag, //검색할 태그명
                tagmode : 'any',
                privacy_filter : 5,
                format : 'json',
                nojsoncallback : 1
            }
        })
        .success(function(data){
            console.log(data.photos.photo);
            var items = data.photos.photo;
    
            $(items).each(function(){
                $('#gallery_pic ul').append(
                    $('<li>')
                        .append(
                            $('<img>').attr({src:'https://farm'+this.farm+'.staticflickr.com/'+this.server+'/'+this.id+'_'+this.secret+'_m.jpg'})
                        )
                        .append(
                            $('<h2>').text(this.title[0])
                        )
                        .append(
                            $('<a>').attr({href:'https://farm'+this.farm+'.staticflickr.com/'+this.server+'/'+this.id+'_'+this.secret+'_b.jpg'})
                            .append('view')
                        )                       
                )
            })
        })
        .error(function(){
            alert('Fail to Load data!!');
        });
    })

   //li를 클릭시 자식인 a태그의 href 주소값을 가져와서 
    //.imgPop안에 있는 img태그의 src값에 적용하고 팝업보이게
    $('body').on('click','#gallery_pic ul li a',function(e){
        e.preventDefault();
        var imgSrc = $(this).attr('href');
        $('.imgPop>img').attr({src : imgSrc});
        $('.imgPop').fadeIn();
    });


    //팝업 닫기버튼 클릭시 레이어팝업 닫기
    $('.imgPop span').on('click',function(){
        $('.imgPop').fadeOut();
    })


})


/*
    flickr image 주소 구조
    https://farm66.staticflickr.com/65535/49852239266_bef45a9bb8_b.jpg
    https://farm{farm}.staticflickr.com/{server}/{imgId}_{imgSec}_b.jpg

    _s : 75,
    _t : 100,
    _m : 240,
    
    _b : 1025,
    _h : 1600,
    _k : 2048

*/