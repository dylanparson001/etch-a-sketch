//global container variable
const container = document.getElementById("gridContainer"); 
let rows = 16;
let columns = 16;

createGrid(rows, columns);
colorHover();

//event listener to 'clear' board
const clearColor = document.querySelectorAll(".grid-item");
document.querySelector("#clearButton").addEventListener("click", () => {
    clearGrid();
})

function createGrid(rows, columns){

    //changes css variables
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    
    //creates grid from rows and columns given
    for (let i = 0; i < (rows * columns); i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item"; // adds cells to container and attaches class name
    }

}
// changes colors when mouse goes over cells in grid
function colorHover(){

    const changeColor = document.querySelectorAll(".grid-item"); // gets list of all the cells from the grid

    //iterates through the list
    for(let i = 0; i < changeColor.length; i++){
        //adds event listener for each cell in list
        changeColor[i].addEventListener("mouseenter", () => { 
            changeColor[i].style.backgroundColor = "black";
        })
}
}

function clearGrid(){

    for (let i = 0; i < clearColor.length; i++){
        clearColor[i].style.backgroundColor = "white";
    }
    /*Not quite working yet
    rows = prompt("How many rows do you want?");
    columns = prompt("How many Columns?")
    createGrid(rows, columns);*/
}
