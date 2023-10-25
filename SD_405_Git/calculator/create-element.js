const div = document.createElement('div')
const p1 = document.createElement('p')
p1.innerText = 'Hello world'

const span = document.createElement('span')
span.innerText = 'Inner span'
p1.before(span)
console.log(p1)

// document.body.append(div)