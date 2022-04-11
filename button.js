var h1ID = document.getElementById('h1');
var buttonID = document.getElementById('button1');
var counter = 0;
buttonID.addEventListener("click",function(){
    counter=counter+1;
    h1ID.textContent='Кликов сделано:' + counter;
});

