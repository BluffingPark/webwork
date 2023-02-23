$(function(){
    //h1.title 을 클릭 시 음악목록이 나오도록 한다
    $("h1.title").click(function(){
        $("ul.music-list").slideDown('slow');
    });
    //곡 선택시 이벤트
    $("ul.music-list li").click(function(){
        $(this).parent().slideUp('slow');

        //노래제목을 얻어서 h1.title에 넣기
        let songname=$(this).text();
        $("h1.title").text(songname);

        //class를 얻어서 #cd에 class로 추가
        let selectClass=$(this).attr("class");
        // $("#cd").attr("class",selectClass);

        //cd가 change 되는 효과를 주기
        $("#cd").animate({width:"0"},'slow',function(){
            //cd 변경
            $("#cd").attr("class",selectClass);
            //다시 너비 조절
            $(this).animate({width:'300px'},'slow');
        });

    });

    
});