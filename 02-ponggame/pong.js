const gameboard = document.getElementById("gameboard");
const cpucheck = document.getElementById("cpucheck");
const ctx = gameboard.getContext("2d");

let boardWidth = 700;
let boardHeight = 500;
let paddleSpin = 1.5; // >= 0.0
let paddleForce = 1.1; // >= 1.0
let paddleWidth = 25;
let paddleLength = 100;
let ballRadius = 12.5;

let ball;
let paddleL;
let paddleR;
let scoreL = 0;
let scoreR = 0;

function resetGame() {
    clearInterval(intervalID);
    gameboard.width = boardWidth;
    gameboard.height = boardHeight;
    
    scoreL = 0;
    scoreR = 0;
    updateScore();
    resetPaddles();
    resetBall();
    nextTick();
}

function resetPaddles() {
    paddleL = new Paddle(0, 0, paddleLength, paddleWidth, "red");
    paddleR = new Paddle(boardWidth-paddleWidth, 0, paddleLength, paddleWidth, "blue");
}

function resetBall() {
    direction= Math.random();
    let range = 2;
    direction = direction * range;
    direction = direction + 1;
    direction = Math.floor(direction)
    if (direction == 1)
        ballSpeed = -5
    else if (direction == 2)
        ballSpeed = 5
    ball = new Ball(boardWidth/2, boardHeight/2, ballSpeed, -6, ballRadius, "teal" )
}

function clearBoard() {
    ctx.fillStyle = "grey";
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
    resetBall();

}

function updateScore() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = `${scoreL} : ${scoreR}`;
}