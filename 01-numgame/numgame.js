const guess = document.getElementById("guess");
const report = document.getElementById("report")
const MAXNUM = document.getElementById("MAXNUM")
let MINNUM = 1;
let maximum = 10;
let secret;

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});
function loadGame() {
    let maximum = parseInt(MAXNUM.value);
    guess.max = maximum;
    guess.min = MINNUM;

    secret= Math.random();
    let range = maximum - MINNUM;
    secret = secret * range;
    secret = secret + MINNUM;
    secret = Math.floor(secret)
}

function makeGuess() {
    let myGuess = parseInt(guess.value); // GET FROM DOCUMENT!

    if (myGuess == secret)  {
        report.innerHTML += `<br>${myGuess} is correct! Yrou're Did It!`
        myConfetti({
            particleCount: 1000,
            spread: 360
        })
        setTimeout(() => {
            afterWaiting();
        }, 5000);
        
    } else if (myGuess < secret) {
        report.innerHTML += `<br>${myGuess} is too small. Womp. Womp.`
    } else {
        report.innerHTML += `<br>${myGuess} is too big. Womp. Womp.`
    }
}

function afterWaiting() {
            loadGame()
            report.innerHTML = `Now you can try again!<br>Report:`
}