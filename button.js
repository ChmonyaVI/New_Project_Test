var h1ID = document.getElementsById('h1');
var buttonID = document.getElementById('button');
var counter = 0;
buttonID.addEventListener('click',function(){
    counter=counter+1;
    h1ID.textContent='Кликов сделано:' + counter;
});

