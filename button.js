var h1ID = document.getElementById('h1');
var buttonID = document.getElementById('button');
var counter = 0;
buttonID.addEventListener('click',function(){
    counter=counter+1;
    h1ID.textContent='Кликов сделано:' + counter;
    if (counter == 100) 
        alert('Поздравляю!')
    else {if (counter == 200) 
        alert('Ты Иван Долбаеб!')
    else {if (counter == 200) 
         alert('Ты Иван Долбаеб!')}}
});