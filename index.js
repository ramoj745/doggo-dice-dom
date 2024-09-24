function diceRoll() {

    var randomNumber1 = Math.floor((Math.random() * 6));
    var randomNumber2 = Math.floor((Math.random() * 6));

    var diceImg = [1,2,3,4,5,6];

    var getImg1 = diceImg[randomNumber1];
    var getImg2 = diceImg[randomNumber2];

    document.querySelector(".player1 img").setAttribute("src", `./images/dice${getImg1}.png`);
    document.querySelector(".player2 img").setAttribute("src", `./images/dice${getImg2}.png`);

    document.querySelector(".dice img").classList.remove("spin");
    document.querySelector(".dice .player2 img").classList.remove("spin");

    document.querySelector(".dice img").offsetWidth;
    document.querySelector(".dice .player2 img").offsetWidth;

    document.querySelector(".dice img").classList.add("spin");
    document.querySelector(".dice .player2 img").classList.add("spin");

    return [getImg1,getImg2];
}

function getWinner(dice1,dice2) {

    if (dice1 > dice2) {
        return true;
    } else if (dice1 < dice2) {
        return false;
    } else {
        return "Tie";
    }
}

function wrapFunction() {

    var [roll1,roll2] = diceRoll();

    var win = getWinner(roll1,roll2);

    if (win === true) {
        document.querySelector(".heading h1").textContent = "Player 1 Wins!";
    } else if (win === false){
        document.querySelector(".heading h1").textContent = "Player 2 Wins!";
    } else if (win === "Tie") {
        document.querySelector(".heading h1").textContent = "It's a Tie!";
    }

}

document.getElementById("rollBtn").addEventListener("click", wrapFunction);



