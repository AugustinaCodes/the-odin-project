const paragraph = document.createElement("p")
paragraph.style.color = "red"
paragraph.textContent = "Hey I'm red!"

document.body.appendChild(paragraph)

const headingThree = document.createElement("h3")
headingThree.style.color = "blue"
headingThree.textContent = "I'm a blue h3!"

document.body.appendChild(headingThree)

// creating div
const element = document.createElement("div")
element.style.borderStyle = "solid"
element.style.borderColor = "black"
element.style.backgroundColor = "pink"

document.body.appendChild(element)

const headingOne = document.createElement("h1")
headingOne.textContent = "I'm in a div"
const anotherPara = document.createElement("p")
anotherPara.textContent = "ME TOO!"
document.querySelector("div").appendChild(headingOne)
document.querySelector("div").appendChild(anotherPara)