//global container variable
const container = document.getElementById("gridContainer"); 
let currentGrid = false;


//event listener for button to 'clear' board
const newColor = document.querySelectorAll(".grid-item");
document.querySelector("#newButton").addEventListener("click", newGrid);
document.querySelector("#clearButton").addEventListener("click", clearGrid);

//functions
function createGrid(rows, columns){

    if( rows > 100 || columns > 100)
        return;
    

    //changes css variables
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    
    //creates grid from rows and columns given
    for (let i = 0; i < (rows * columns); i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item"; // adds cells to container and attaches class name
    }
    currentGrid = true;
}
// changes colors when mouse goes over cells in grid
function colorHover(){

    // gets list of all the cells from the grid
    const changeColor = document.querySelectorAll(".grid-item"); 

    //iterates through the list
    for(let i = 0; i < changeColor.length; i++){

        //adds event listener for each cell in list
        changeColor[i].addEventListener("mouseenter", () => { 
            changeColor[i].style.backgroundColor = "black";
        })
    }
}
//creates new grid
function newGrid(){
    
    //removes previous grid
    if(currentGrid === true){
        const clearContainer = document.querySelectorAll(".grid-item");
        for (u = 0; u < clearContainer.length; u++){
        clearContainer[u].remove();
    
        }
    }
    
    rows = prompt("How many rows do you want? (max of 100)");
    columns = prompt("How many Columns? (max of 100)")

    createGrid(rows, columns);
    colorHover();
}
//clears grid
function clearGrid(){
    const clearColor = document.querySelectorAll(".grid-item");
    for (let i = 0; i < clearColor.length; i++){
        clearColor[i].style.backgroundColor = "white";
    }
}