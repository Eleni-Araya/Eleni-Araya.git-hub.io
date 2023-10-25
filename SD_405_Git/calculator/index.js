let inputsArray = [];

function onNumberClick(e) {
  inputsArray.push(e.target.innerText)
  addToInputDisplay()
}

function onOperatorClick(e) {
  if (e.target.innerText === '«') {
    inputsArray.pop()
  } else if(e.target.innerText === '=') {
    displayResult()
  } else {
    inputsArray.push(e.target.innerText)
  }
  addToInputDisplay()
}

function addToInputDisplay() {
  p = document.getElementById('input-display')
  p.innerText = inputsArray.join(' ')
}

function calculateInput() {
  console.log(inputsArray.join(''))
  let allInput = inputsArray.join('')
  return eval(allInput)
}

function displayResult() {
  let resultDisplay = document.getElementById('result-display')
  resultDisplay.innerText = calculateInput()
}