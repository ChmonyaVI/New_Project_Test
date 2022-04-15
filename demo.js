var text = document.getElementById("result");
var button = document.getElementById("button");
var timer;
var number = 0;

button.addEventListener('click',function(){
    clearInterval(timer);
});
function starttimer(){
    timer=setInterval(plusone,1000);
};
function plusone(){
    text.innerHTML = number++;
};
starttimer();