var x = document.querySelector(".container h1");
var randomNumber1 = Math.floor((Math.random() * 6) + 1); 
var randomNumber2 = Math.floor((Math.random() * 6) + 1); 


// document.querySelector('div img').setAttribute("src", "images/dice5.png");


var dice1 = "images/dice" + randomNumber1 + ".png"
var dice2 = "images/dice" + randomNumber2 + ".png"

document.querySelector("img.img1").setAttribute("src", dice1);
document.querySelector('img.img2').setAttribute("src", dice2);

if (randomNumber1>randomNumber2){
    x.innerHTML = "🚩Player 1 wins ";
}
else if (randomNumber1<randomNumber2){
    x.innerHTML = "🚩Player 2 wins";
}
else{
    x.innerHTML = "Its a Tie!";
}


