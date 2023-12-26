let firstSection = document.getElementById('one')
let firstAnswer = document.getElementById('a-one')
let firstMinusImage = document.getElementById('minus-one')
let firstPlusImage = document.getElementById('plus-one')

let secondSection = document.getElementById('two')
let secondAnswer = document.getElementById('a-two')
let secondMinusImage = document.getElementById('minus-two')
let secondPlusImage = document.getElementById('plus-two')


let thirdSection = document.getElementById('three')
let thirdAnswer = document.getElementById('a-three')
let thirdMinusImage = document.getElementById('minus-three')
let thirdPlusImage = document.getElementById('plus-three')

let fourthSection = document.getElementById('four')
let fourthAnswer = document.getElementById('a-four')
let fourthMinusImage = document.getElementById('minus-four')
let fourthPlusImage = document.getElementById('plus-four')


firstSection.addEventListener('click', () =>{
    firstAnswer.classList.toggle('clicked')
    firstMinusImage.classList.toggle('clicked')
    firstPlusImage.classList.toggle('clicked')
})
secondSection.addEventListener('click', () =>{
    secondAnswer.classList.toggle('clicked')
    secondMinusImage.classList.toggle('clicked')
    secondPlusImage.classList.toggle('clicked')
})
thirdSection.addEventListener('click', () =>{
    thirdAnswer.classList.toggle('clicked')
    thirdMinusImage.classList.toggle('clicked')
    thirdPlusImage.classList.toggle('clicked')
})
fourthSection.addEventListener('click', () =>{
    fourthAnswer.classList.toggle('clicked')
    fourthMinusImage.classList.toggle('clicked')
    fourthPlusImage.classList.toggle('clicked')
})