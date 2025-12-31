//variables
let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;
let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');


//functions
window.onload = function(){
    setGame();

}

function setGame(){
    //set up the grid for the game board in html 
    //for loop
    for(let i = 0; i < 9; i++){
        //i goes from 0 to 8 stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile); 

    }
    setInterval(setMole, 1000); //2000 milliseconds = 2 seconds 
    setInterval(setPlant, 2000); //3000 miliseconds = 3 seconds 
}

function getRandomTile(){
    //math.random --> (0-1) * 9 = (0-9)--> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) return;   
    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement('img');
    mole.src = "images/dem.png.webp";
    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id == num){
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant(){
    if (gameOver) return;   
    if(currPlantTile){
        currPlantTile.innerHTML = "";   
    }
    let plant = document.createElement('img');
    plant.src = "images/dobby.png"
    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id == num){
        return;
    }

    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}
function selectTile(){
    if(gameOver) { 
        return;
    }
    if(this == currMoleTile){
        score += 10;
        document.getElementById("score").innerText = score.toString();//update score 
    }
    else if (this == currPlantTile){
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}

document.addEventListener('mousemove',moveCursor)

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}
