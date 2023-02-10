//setTimeout(함수,시간):일정 시간이 지나면 딱 한 번 함수 호출(ppt 51p)
console.log("안녕하세요");
setTimeout(function(){
     console.log("2초 지났어요!!!");
},2000);//1000 이 1초

// 화살표 함수를 이용해서 만들어보자
setTimeout(()=>{
    console.log("3초 지났어요!!!");
},3000);