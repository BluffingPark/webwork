//var : 함수형 변수 (같은 함수 안에서 중복되면 덮어씀)
//let : 영역형 변수 (항상 새로 생성, 해당 영역 벗어나면 사라짐)

var a=1; //새로 생성
let b=2; //새로 생성

//사용자 함수 따로 호출해줘야 실행됨
function test1()
{
    var a=3; //새로 생성,외부의 a와 전혀 다른 변수로 생성
    let b=4; //새로 생성

    if(true){
        var a=5; //덮어쓴다,10번라인의 a변수(a=3)에 덮어씀
        let b=6; //새로 생성
        console.log(`a=${a},b=${b}`);//a=5,b=6
    }
    console.log(`a=${a},b=${b}`);//a=5,b=4
}

//함수호출
test1();
console.log(`a=${a},b=${b}`);//a=1,b=2