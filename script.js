/*script.js*/

/*const node = document.createElement('div');  //create the element to be inserted
const cont = document.getElementById('container'); // retreive the div with id="container"
 cont.appendChild(node); //add the created div as a child to the container */


 /*so this is the basic form for adding things to the container I want
   Now I want to add multiple divs to the container*/

numGrid = prompt("How many squares to a side please?")
 
function createDiv(createdElement, newClass, parentName) {         // This function add divs to the parent, "container", all divs have class "gridbox"
    const node = document.createElement(createdElement);  //create the element to be inserted
    node.classList.add(newClass) //adds class to all the divs
    const cont = document.getElementById(parentName); // retreive the div with id="container"
    cont.appendChild(node); //add the created div as a child to the container
}
function addSquares(num, cE, nC, pN) { // Now this function adds as many divs to the parent container as the input requires
    let gridCount = (num ** 2)
    for (i = 0; i < gridCount; ++i) {
        createDiv(cE, nC, pN)    
    }
    gridDimension = 600 / num  //This portion determines the necessary width of the grid to fit into the box.
    gridDimension += "px"
    var hw = document.getElementsByClassName('gridbox');  //With this command, all the divs are listed in an array of num x num
    for(var i=0; i< hw.length;i++){   //now each div has its width and height updated to the container width divided by number of grids to a side
       hw[i].style.width = gridDimension;
       hw[i].style.height = gridDimension;
    } 
}
addSquares(numGrid, 'div', 'gridbox', 'container');


/*This function finds the "target" of the mouse, and when that target
    is one of the grid divs (which all have class gridbox), the 
    function adds the blackout class. 
*/


addEventListener('mouseover', (event) => {
    elem = event.target
    if (elem.classList[0] == 'gridbox') {
        elem.classList.add("blackout")
    }
    
    
}



)
 

 
 
 