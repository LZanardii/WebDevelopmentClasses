var note = document.getElementById("note")
var counter = document.getElementById("counter")
var nextButton = document.getElementById("next")
var previousButton = document.getElementById("previous")

counter.innerHTML = `Caracteres disponíveis - 405`
nextButton.disabled = true
previousButton.disabled = true

var notes = []
var current = 0

const isInvalid = () => {
  if (note.value.length > 405){
    return "Tamanho máximo de caracteres atingido"
  } else if (note.value.length === 0){
    return "Nota não pode estar vazia"
  }
}

note.addEventListener("input", function input() {
  if (isInvalid()){
    alert(isInvalid())
    note.value = note.value.replace(/.$/, '')
  }
  counter.innerHTML = `Caracteres disponíveis - ${405 - note.value.length}`
})

const save = () => {
  if(!isInvalid()){
    notes[current] = note.value
    alert("Nota salva com sucesso!")
  } else {
    alert(isInvalid())
  }
}

const newNote = () => {
  notes.push("")
  note.value = ""
  previousButton.disabled = false
  current = notes.length - 1
  counter.innerHTML = `Caracteres disponíveis - 405`
}

const next = () =>{
  note.value = notes[current += 1]
  counter.innerHTML = `Caracteres disponíveis - ${405 - note.value.length}`
  previousButton.disabled = false
  if (current === notes.length -1){
    nextButton.disabled = true
  }
}

const previous = () =>{
  note.value = notes[current -= 1]
  counter.innerHTML = `Caracteres disponíveis - ${405 - note.value.length}`
  nextButton.disabled = false
  if (current === 0){
    previousButton.disabled = true
  }
}