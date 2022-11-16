/*script.js*/

/*const node = document.createElement('div');  //create the element to be inserted
const cont = document.getElementById('container'); // retreive the div with id="container"
 cont.appendChild(node); //add the created div as a child to the container */


 /*so this is the basic form for adding things to the container I want
   Now I want to add multiple divs to the container*/

let gridDimension = 3;
 

/* we have the number of containers we need, 16 ** 2 = 256" *
   I will try to create a function that loops for 256 times
    for (i = 0, i < gridCount (256; ++i)
        create the div
        append the child
   It might be prudent to create a function to create divs
*/

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
}

addSquares(gridDimension, 'div', 'gridbox', 'container');
console.log(container)