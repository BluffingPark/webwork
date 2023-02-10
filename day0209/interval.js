//setInterval(함수,시간):일정 시간마다 함수가 호출된다
//변수명=setInterval(함수,시간) : 멈추고 싶을 때 clearInterval(변수명)

/*var n=1;
var interval=setInterval(() => {
    console.log(n+"초 지났어요!!!!");
    n++;
    if(n>10){
        clearInterval(interval);//interval 멈춤
        console.log("** 끝 **");
    }
}, 1000);
*/


var n=10;
var interval=setInterval(() => {
    console.log(n+"초 남았어요!!!!");
    n--;
    if(n==0){
        clearInterval(interval);//interval 멈춤
        console.log("** 끝 **");
    }
}, 1000);