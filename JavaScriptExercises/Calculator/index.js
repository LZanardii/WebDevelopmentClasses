const Operators = {
  plus: "+",
  minus: "-",
  time: "*",
  obelus: "/",
  equals: "="
}

var operator
var firstNumber = ""
var secondNumber = ""
var finalValue = document.getElementById("finalValue")

const clean = () => {
  firstNumber = ""
  secondNumber = ""
  operator = ""
  finalValue.innerHTML = ""
}
const getNumber = (number) => {
  if (!operator) {
    firstNumber += number
    finalValue.innerHTML = firstNumber
  } else if (operator !== Operators.equals) {
    secondNumber += number
    finalValue.innerHTML = secondNumber
  }
}

const operate = () => {
  firstNumber = firstNumber
  secondNumber = secondNumber
  var resultado = "ERRO"
  if (firstNumber && operator && secondNumber) {
    resultado = eval(firstNumber + operator + secondNumber)
  }
  return resultado
}

const operation = (ope) => {
  if (ope !== Operators.equals) {
    operator = ope
  }
  if (firstNumber.length > 0 && secondNumber.length > 0) {
    var result = operate()
    finalValue.innerHTML = `${result}`
    firstNumber = result.toString()
    secondNumber = ""
  }
}