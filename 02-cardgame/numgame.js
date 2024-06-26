const draw = document.getElementById("draw");
const report = document.getElementById("report")
const MAXNUM = document.getElementById("MAXNUM")
const dealer = document.getElementById("dealer")
let MINNUM = 1;
let maximum = 14;
let card;
let dcard1;
let dcard2;
let range = maximum - MINNUM;

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});
function loadGame() {
    dcard1= Math.random();
    dcard1 = dcard1 * range;
    dcard1 = dcard1 + MINNUM;
    dcard1 = Math.floor(dcard1)
    
    dcard2= Math.random();
    dcard2 = dcard1 * range;
    dcard2 = dcard1 + MINNUM;
    dcard2 = Math.floor(dcard2)
  
}





function loadCard() {
    card= Math.random();
    let range = maximum - MINNUM;
    card = card * range;
    card = card + MINNUM;
    card = Math.floor(card)
 // GET FROM DOCUMENT!

    if (card == 1)  {
         report.innerHTML += `<br>2`
    } else if (card == 2) {
        report.innerHTML += `<br>3`
    } else if (card == 3) {
        report.innerHTML += `<br>4`
    } else if (card == 4) {
        report.innerHTML += `<br>5`
    } else if (card == 5) {
        report.innerHTML += `<br>6`
    } else if (card == 6) {
        report.innerHTML += `<br>7`
    } else if (card == 7) {
        report.innerHTML += `<br>8`
    } else if (card == 8) {
        report.innerHTML += `<br>9`
    } else if (card == 9) {
        report.innerHTML += `<br>10`
    } else if (card == 10) {
        report.innerHTML += `<br>Ace`
    } else if (card == 11) {
        report.innerHTML += `<br>Jack`
    } else if (card == 12) {
        report.innerHTML += `<br>Queen`
    } else if (card == 13) {
        report.innerHTML += `<br>King`
    }
}




