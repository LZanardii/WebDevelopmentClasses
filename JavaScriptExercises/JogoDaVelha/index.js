const operador_x = "X"
const operador_o = "O"

var vencedor = document.getElementById("vencedor")

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");

vencedor.innerHTML=operador_x

const atualiza_value = (element, value) => {
  if (element.innerHTML === "&nbsp;"){
    element.innerHTML=value
    if (value === operador_x) {
      vencedor.innerHTML=operador_o
    } else {
      vencedor.innerHTML=operador_x
    }
  }
} 

const reiniciar_jogo = () => {
  one.innerHTML = "&nbsp;"
  one.style.backgroundColor = "gainsboro"
  two.innerHTML = "&nbsp;" 
  two.style.backgroundColor = "gainsboro"
  three.innerHTML = "&nbsp;"
  three.style.backgroundColor = "gainsboro" 
  four.innerHTML = "&nbsp;" 
  four.style.backgroundColor = "gainsboro"
  five.innerHTML = "&nbsp;" 
  five.style.backgroundColor = "gainsboro"
  six.innerHTML = "&nbsp;" 
  six.style.backgroundColor = "gainsboro"
  seven.innerHTML = "&nbsp;" 
  seven.style.backgroundColor = "gainsboro"
  eight.innerHTML = "&nbsp;"
  eight.style.backgroundColor = "gainsboro" 
  nine.innerHTML = "&nbsp;"
  nine.style.backgroundColor = "gainsboro"
  vencedor.innerHTML = operador_x
}

const valida_velha = () => {
  if (
    one.innerHTML !== "&nbsp;" &&
    two.innerHTML !== "&nbsp;" &&
    three.innerHTML !== "&nbsp;" &&
    four.innerHTML !== "&nbsp;" &&
    six.innerHTML !== "&nbsp;" &&
    seven.innerHTML !== "&nbsp;" &&
    eight.innerHTML !== "&nbsp;" &&
    nine.innerHTML !== "&nbsp;"
  ){
    vencedor.innerHTML="Deu Velha"
  }
}

var valida_vencedor = function() {
  if((one.innerHTML===two.innerHTML) && (two.innerHTML===three.innerHTML) && one.innerHTML !== "&nbsp;" ) {
    one.style.backgroundColor='#0F0';
    two.style.backgroundColor='#0F0';
    three.style.backgroundColor='#0F0';
    return -1
  }else if((four.innerHTML===five.innerHTML) && (five.innerHTML===six.innerHTML) && four.innerHTML!=="&nbsp;" ) {
    four.style.backgroundColor='#0F0';
    five.style.backgroundColor='#0F0';
    six.style.backgroundColor='#0F0';
    return -1;
  }else if((seven.innerHTML===eight.innerHTML) && (eight.innerHTML===nine.innerHTML) && seven.innerHTML!=="&nbsp;" ) {
    seven.style.backgroundColor='#0F0';
    eight.style.backgroundColor='#0F0';
    nine.style.backgroundColor='#0F0';
    return -1;
  }else if((one.innerHTML===four.innerHTML) && (four.innerHTML===seven.innerHTML) && one.innerHTML!=="&nbsp;" ) {
    one.style.backgroundColor='#0F0';
    four.style.backgroundColor='#0F0';
    seven.style.backgroundColor='#0F0';
    return -1;
  }else if((two.innerHTML===five.innerHTML) && (five.innerHTML===eight.innerHTML) && two.innerHTML!=="&nbsp;" ) {
    two.style.backgroundColor='#0F0';
    five.style.backgroundColor='#0F0';
    eight.style.backgroundColor='#0F0';
    return -1;
  }else if((three.innerHTML===six.innerHTML) && (six.innerHTML=== nine.innerHTML) && three.innerHTML!=="&nbsp;") {
    three.style.backgroundColor='#0F0';
    six.style.backgroundColor='#0F0';
    nine.style.backgroundColor='#0F0';
    return -1;
  }else if((one.innerHTML===five.innerHTML) && (five.innerHTML===nine.innerHTML) && one.innerHTML!=="&nbsp;" ) {
    one.style.backgroundColor='#0F0';
    five.style.backgroundColor='#0F0';
    nine.style.backgroundColor='#0F0';
    return -1;
  }else if((three.innerHTML===five.innerHTML) && (five.innerHTML===seven.innerHTML) && three.innerHTML!=="&nbsp;" ) {
    three.style.backgroundColor='#0F0';
    five.style.backgroundColor='#0F0';
    seven.style.backgroundColor='#0F0';
    return -1;
  }
  valida_velha()
}

const feedback_vencedor = () => {
  if (valida_vencedor() == -1){
    vencedor.innerHTML = "FIM DE JOGO"
  }
}

one.addEventListener('click', function onClick() {
  atualiza_value(one, vencedor.innerHTML)
  feedback_vencedor()
})

two.addEventListener('click', function onClick() {
  atualiza_value(two, vencedor.innerHTML)
  feedback_vencedor()
})

three.addEventListener('click', function onClick() {
  atualiza_value(three, vencedor.innerHTML)
  feedback_vencedor()
})

four.addEventListener('click', function onClick() {
  atualiza_value(four, vencedor.innerHTML)
  feedback_vencedor()
})

five.addEventListener('click', function onClick() {
  atualiza_value(five, vencedor.innerHTML)
  feedback_vencedor()
})

six.addEventListener('click', function onClick() {
  atualiza_value(six, vencedor.innerHTML)
  feedback_vencedor()
})

seven.addEventListener('click', function onClick() {
  atualiza_value(seven, vencedor.innerHTML)
  feedback_vencedor()
    
})

eight.addEventListener('click', function onClick() {
  atualiza_value(eight, vencedor.innerHTML)
  feedback_vencedor()
})

nine.addEventListener('click', function onClick() {
  atualiza_value(nine, vencedor.innerHTML)
  feedback_vencedor()
})