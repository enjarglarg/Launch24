const gameboard = document.getElementById("gameboard");
const cpucheck = document.getElementById("cpucheck");
const ctx = gameboard.getContext("2d");

let boardWidth = 900;
let boardHeight = 500;
let paddleSpin = 1.5; // >= 0.0
let paddleForce = 1.1; // >= 1.0
let paddleWidth = 30;
let paddleLength = 80;
let ballRadius = 10;

let ball;
let paddleL;
let paddleR;
let scoreL = 0;
let scoreR = 0;
let ballVariable = 4;

function resetGame() {
    clearInterval(intervalID);
    gameboard.width = boardWidth;
    gameboard.height = boardHeight;
    
    scoreL = 0;
    scoreR = 0;
    nextTick();
    updateScore();
    resetPaddles();
    resetBall()
    ball.vx = 0
    ball.vy = 0
    setTimeout(() => {
        resetBall();
        
    }, 1000);
    
}

function resetPaddles() {
    paddleL = new Paddle(0, 0, paddleLength, paddleWidth, "rgb(255, 175, 0)");
    paddleR = new Paddle(boardWidth-paddleWidth, 0, paddleLength, paddleWidth, "rgb(30, 154, 255)");
}

function resetBall() {
    direction= Math.random();
    let range = 2;
    let ballVariable = 4;
    direction = direction * range;
    direction = direction + 1;
    direction = Math.floor(direction)
    if (direction == 1)
        ballSpeed = -ballVariable
    else if (direction == 2)
        ballSpeed = ballVariable
    directionY= Math.random();
    directionY = directionY * range;
    directionY = directionY + 1;
    directionY = Math.floor(directionY)
    if (directionY == 1)
        ballSpeedY = -ballVariable
    else if (directionY == 2)
        ballSpeedY = ballVariable
    ball = new Ball(boardWidth/2, boardHeight/2, ballSpeed, ballSpeedY, ballRadius, "rgb(40,40,40)" )
}

function clearBoard() {
    ctx.fillStyle = "rgb(255, 228, 196)";
    ctx.fillRect(0, 0, boardWidth, boardHeight);
}

function draw() {
    clearBoard();
    ball.draw(ctx);
    paddleL.draw(ctx);
    paddleR.draw(ctx);

}

let intervalID;

function nextTick() {
    intervalID = setTimeout(
        () => {
            paddleL.move();
            if (cpucheck.checked) {
                paddleR.moveCPU(ball);
            } else {
                paddleR.move();
            }
            ball.bounceWall();
            if (ball.bouncePaddleL(paddleL)) score("right");
            if (ball.bouncePaddleR(paddleR)) score("left");
            ball.move();
            draw();
            nextTick();
        }, 10
    );
}

function score(player) {
    if (player == "left") scoreL++;
    if (player == "right") scoreR++;

    updateScore();
    resetBall();
    ball.vx = 0
    ball.vy = 0
    setTimeout(() => {
        afterWaiting();
    }, 2000);

}
function afterWaiting() {       

    if (scoreL == 5) {
        ball.vx = 0
        ball.vy = 0 
        scoreboard.innerHTML = `ORANGE WINS!`
        resetBall();
        ball.vx = 0
        ball.vy = 0 
        setTimeout(() => {
            resetGame();
        }, 1000);
        ball.vx = 0
        ball.vy = 0 
    }
    else if (scoreR == 5) {
        ball.vx = 0
        ball.vy = 0 
        scoreboard.innerHTML = `BLUE WINS!`
        ball.vx = 0
        ball.vy = 0 
        setTimeout(() => {
            resetGame();
        }, 1000);
        ball.vx = 0
        ball.vy = 0 
        
    }
    resetBall();

}

function updateScore() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = `${scoreL} : ${scoreR}`;
}