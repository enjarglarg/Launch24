const UPARROW = 38;
const DOWNARROW = 40;
const WKEY = 87;
const SKEY = 83;
const DKEY = 68;
const LEFTARROW = 37;

let paddleVelocity = 10;

function keyDown(event) {
    const key = event.keyCode;
    console.log(`KEYDOWN: ${key}`)
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
            if (ball.x < 100) {
                ball.vx -= 1;
                ball.vy += 1.5;
                console.log('deflect')
            }
            break;
        case (LEFTARROW):
            if (ball.x > boardWidth-100) {
                ball.vx += 1;
                ball.vy += 1.5;
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
