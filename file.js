const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'green', 'purple', 'yellow', 'pink', 'oragered', 'aqua', 'brown', 'blueviolet','gold']

body.style.backgroundColor = 'violet';

button.addEventListener('click', changeBG)

function changeBG(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}