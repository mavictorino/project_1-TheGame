
const pointsDisplay = document.getElementById("points");
let points = 0;
const width = 28;
const grid = document.querySelector(".grid");



// 0 - food | 1 - wall | 2 - enemies cave | 3 - superfood | 4 - empty 
const gridLayout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1 ,0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1

];

//creating the game space

const squares = []; // each square (div) created needs to go to this new array and this will be styled acording to the nature of element from the gridLayout

function createGameSpace() {
    for (i = 0; i < gridLayout.length; i++) {
        const square = document.createElement("div");
        square.id = i;
        grid.appendChild(square);
        squares.push(square)

        if (gridLayout[i] === 0) {
            squares[i].classList.add("food");
        }
        else if (gridLayout[i] === 1) {
            squares[i].classList.add("wall");
        }
        else if (gridLayout[i] === 2) {
            squares[i].classList.add("enemies-cave");
        }
        else if (gridLayout[i] === 3) {
            squares[i].classList.add("superfood");
        }
        else if (gridLayout[i] === 4) {
            squares[i].classList.add("empty");
        }
    }
}
createGameSpace();

// creating pacman: - need to determine the square.id to position pacman in the middle 

let pacmanCurrentIndex = 489;
squares[pacmanCurrentIndex].classList.add("pacman");

//moving pacman

const directions = {
    "ArrowLeft": -1,
    "ArrowRight": +1,
    //in a 2d array the vertical movement will be defined by the length
    "ArrowUp": -width, 
    "ArrowDown": width,
};

function movePacman(e) {
    const direction = directions[e.key];
    if (direction === undefined) return;

    const nextIndex = pacmanCurrentIndex + direction;

    //check wall collision
    if (!squares[nextIndex].classList.contains("wall")) {
        squares[pacmanCurrentIndex].classList.remove("pacman");
        
        pacmanCurrentIndex = nextIndex;

        //pass tunnels
        if (pacmanCurrentIndex === 364) {
            pacmanCurrentIndex = 391; 
        } else if (pacmanCurrentIndex === 391) {
            pacmanCurrentIndex = 364; 
        }
        squares[pacmanCurrentIndex].classList.add("pacman");
    }
    eatFood();
    eatSuperfood();
};

document.addEventListener('keydown', movePacman);

// pacman eating food

function eatFood() {
    if (squares[pacmanCurrentIndex].classList.contains("food")) {
        points++;
        pointsDisplay.innerHTML = points;
        squares[pacmanCurrentIndex].classList.remove("food")
    }
};

// pacman eating superfood

function eatSuperfood() {
    if(squares[pacmanCurrentIndex].classList.contains("superfood")) {
        points += 20;
        pointsDisplay.innerHTML = points;
        squares[pacmanCurrentIndex].classList.remove("superfood")
    }
};

// creating enemies

let enemy1CurrentIndex = 348;
squares[enemy1CurrentIndex].classList.add("enemy1");

let enemy2CurrentIndex = 351;
squares[enemy2CurrentIndex].classList.add("enemy2");

let enemy3CurrentIndex = 376;
squares[enemy3CurrentIndex].classList.add("enemy3");

let enemy4CurrentIndex = 379;
squares[enemy4CurrentIndex].classList.add("enemy4");


// moving enemies

const enemiesDirections = [-1, 1, -width, width]; 

function moveEnemy(enemyIndex, enemyClass) {
    const randomDirection = enemiesDirections[Math.floor(Math.random() * enemiesDirections.length)];
    const nextIndex = enemyIndex + randomDirection;

    //check wall colision
    if (!squares[nextIndex].classList.contains("wall")) {
        squares[enemyIndex].classList.remove(enemyClass);
        enemyIndex = nextIndex;
        squares[enemyIndex].classList.add(enemyClass);
    }
    if (enemyIndex === pacmanCurrentIndex) {
        gameOver();
    }
    return enemyIndex; 
}
// seting the intervals for movement

let enemy1Interval = setInterval(function() {
    enemy1CurrentIndex = moveEnemy(enemy1CurrentIndex, "enemy1");
}, 150);

let enemy2Interval = setInterval(function() {
    enemy2CurrentIndex = moveEnemy(enemy2CurrentIndex, "enemy2");
}, 150);

let enemy3Interval = setInterval(function() {
    enemy3CurrentIndex = moveEnemy(enemy3CurrentIndex, "enemy3");
}, 150);

let enemy4Interval = setInterval(function() {
    enemy4CurrentIndex = moveEnemy(enemy4CurrentIndex, "enemy4");
}, 150);

// game over scenarios

function gameOver() {
    clearInterval(enemy1Interval);
    clearInterval(enemy2Interval);
    clearInterval(enemy3Interval);
    clearInterval(enemy4Interval);
    document.removeEventListener('keydown', movePacman);
    alert(`Game Over!`);
    location.reload();
};

