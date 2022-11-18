/*script.js*/
//Function that automatically adds divs with class to a specified parent
function createDiv(createdElement, newClass, parentName) {          
    const node = document.createElement(createdElement);  //create the element to be inserted
    node.classList.add(newClass) //adds class to all the divs
    const cont = document.getElementById(parentName); // retreive the div with id="container"
    cont.appendChild(node); //add the created div as a child to the container
}
//Function that adds divs to the box, if 17 is the input, 289 divs are added
function addSquares(num, cE, nC, pN) {  
    
    let gridCount = (num ** 2)
    for (i = 0; i < gridCount; ++i) {
        createDiv(cE, nC, pN)    
    }
    gridDimension = 600 / num   
    gridDimension += "px"
    var hw = document.getElementsByClassName('gridbox');   
    for(var i=0; i< hw.length;i++){    
        hw[i].style.width = gridDimension;
        hw[i].style.height = gridDimension;
    } 
}
//Black painter
function black() {
    for (let i = 0; i < griddy.length; i++) {
        griddy[i].addEventListener('mouseover', (e) => {
        changeColor(e, 'black') 
        })
    } 
}
//Functions for generating random colors
function random(num) {
    rand = Math.floor((Math.random() * num) + 1 )
    return rand
}
function randomColor(num) {
    color = `rgb(${random(num)}, ${random(num)}, ${random(num)})`
     
    return color
}
//Rainbow Painter
function rainbow(){
    for (let i = 0; i < griddy.length; i++) {
        griddy[i].addEventListener('mouseover', (e) => {
        x = randomColor(255)
        changeColor(e, x) 
        })
    }
} 
//GRAYSCALE PAINTER
function grayscale () { 
    for (let i = 0; i < griddy.length; i++) {
        let shades = ['FFFFFF','#e2e2e2', '#c6c6c6', '#ABABAB', '#919191', '#777777', '#5e5e5e', '#474747', '#303030', '#1b1b1b', '#000000']
        let j= 0
        griddy[i].addEventListener('mouseover', (e) => {
            j += 1
            changeColor(e, shades[j])

        })
    } 
}
addSquares(20, 'div', 'gridbox', 'container')
//Function to choose color
btn = document.querySelector('.buttons')
btn.addEventListener('click', (e) => {
    color = e.target.getAttribute('data-color')
    console.log(color)
    if (color == 'black') {black()}
    else if (color == 'rainbow') {rainbow()}
    else if (color == 'grayscale') {grayscale()}
})



 
//Function that resets the box each time a new grid value is selected with the slider
const num = document.querySelector('.slider') 
num.addEventListener('input', () => {
    document.querySelectorAll('.gridbox').forEach(each => each.remove())  
    gridCount = parseInt(num.value)
    addSquares(gridCount, 'div', 'gridbox', 'container')
})

const griddy = document.querySelectorAll('.gridbox')
function changeColor(elementToColor, bgChange) {
    
    elementToColor.target.style.background = bgChange
}


