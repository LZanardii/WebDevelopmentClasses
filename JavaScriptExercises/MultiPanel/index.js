var firstButton = document.getElementById("first");
var secondButton = document.getElementById("second");
var thurdButton = document.getElementById("third");

var card = document.getElementById("card");

firstButton.addEventListener('click', function onClick() {
    card.style.backgroundColor = 'green';
    card.innerHTML=""
})

secondButton.addEventListener('click', function onClick() {
    card.style.backgroundColor = 'blue';
    card.innerHTML=""
    firstButton.innerHTML = "Pra voltar clica aqui";
})

thurdButton.addEventListener('click', function onClick() {
    card.style.backgroundColor = 'red';
    card.innerHTML="<img src='colorado.png'>"
})