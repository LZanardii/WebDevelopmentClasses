var feedback_h3 = document.getElementById("feedback")
feedback_h3.innerHTML = "Selecionar 15 números"

var array_numbers = []

const update_selecteds = () => {
  array_numbers.forEach((obj) => {
    if(obj.selected === true){
      var element = document.getElementById(obj.value)
      element.style.backgroundColor = "red"
    }
  })
}

const is_selected = (obj) => {
  return (obj[0].selected == true) ? true : false
}

const get_random = () => {
  let random = Math.floor(Math.random() * 25);
  return random === 0 ? get_random() : random
}

const populate_array = () => {
  for (var i = 1; i < 26; i++) {
    array_numbers.push(
      {
        value: i, 
        selected: false
      }
    )
  }
}

const reset_selecteds = () => {
  array_numbers = []
  for (var i = 1; i < 26; i++) {
    var element = document.getElementById(i)
    element.style.backgroundColor = "gainsboro"
  }
  feedback_h3.innerHTML = "Selecionar 15 números"
}

const random_selecteds = () => {
  reset_selecteds()
  populate_array()
  let count = 0
  while (count < 15){
    let random = get_random()
    let obj = array_numbers.filter((obj) => obj.value === random)
    let is_selected_return= is_selected(obj)
    if (is_selected_return === false){
      count += 1
      array_numbers = array_numbers.map((obj) => {
        if (obj.value === random) {
          return {...obj, selected: true};
        } else {
          return obj
        }
      })
    }
  }
  feedback_h3.innerHTML = `${count} números selecionados`
  update_selecteds()
}

const on_click = (id) => {
  if (array_numbers.length < 15 && array_numbers.filter((obj) => obj.value === id).length === 0){
    var element = document.getElementById(id)
    element.style.backgroundColor = "red"
    array_numbers.push({
      value: parseInt(element.innerHTML),
      selected: true
    })
    array_numbers.length <= 1 ? feedback_h3.innerHTML = `${1} número selecionado` : feedback_h3.innerHTML = `${array_numbers.length} números selecionados`
  } else if (array_numbers.filter((obj) => obj.value === id).length !== 0){
    alert("Você não pode selecionar o mesmo número duas vezes")
  } else {
    alert("Você pode escolher no máximo 15 números")
  }
}

const submit = () => {
  array_numbers = array_numbers.filter((obj) => obj.selected === true)
  if (array_numbers.length !== 15){
    alert("Você deve selecionar ao todo 15 números para realizar o salvar") 
  }
  console.log(array_numbers.filter((obj) => obj.selected == true))
}