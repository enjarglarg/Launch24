const UPARROW = 38;
const DOWNARROW = 40;
const WKEY = 87;
const SKEY = 83;
const DKEY = 68;
const LEFTARROW = 37;

let paddleVelocity = 10;

function keyDown(event) {
    const key = event.keyCode;
    //console.log(`KEYDOWN: ${key}`)
    switch (key) {
        case (UPARROW):
            paddleR.vy = -paddleVelocity;
            break;
        case (DOWNARROW):
            paddleR.vy = paddleVelocity;
            break;
        case (WKEY):
            paddleL.vy = -paddleVelocity;
            break;
        case (SKEY):
            paddleL.vy = paddleVelocity;
            break;
        case (DKEY):
            yVelocity= Math.random();
            let range = 6;
            yVelocity = yVelocity * range;
            yVelocity = yVelocity - 3;
            if (ball.x < 100) {
                ball.vx -= 1;
                ball.vy += yVelocity;
                console.log('deflect')
            }
            break;
        case (LEFTARROW):
            yVelocity= Math.random();
            let rrange = 6;
            yVelocity = yVelocity * rrange;
            yVelocity = yVelocity - 3;
            if (ball.x > boardWidth-100) {
                ball.vx += 1;
                ball.vy += yVelocity;
                console.log('deflect')
            }
        default:
    }
}
window.addEventListener("keydown", keyDown);
function keyUp(event) {
    const key = event.keyCode;
    //console.log(`KEYUP: ${key}`)
    switch (key) {
        case (UPARROW):
        case (DOWNARROW):
            paddleR.vy = 0;
            break;
        case (WKEY):
        case (SKEY):
            paddleL.vy = 0;
            break;
        default:
    }
}
window.addEventListener("keyup", keyUp);
