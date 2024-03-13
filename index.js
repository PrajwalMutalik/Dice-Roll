function dice1(){var randomNumber1 = Math.floor(Math.random()*6) +1 ;
var randomdice = "dice" + randomNumber1 + ".png";
var randimg = "images/" + randomdice;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randimg);
return randomNumber1;}

function dice2(){var randomNumber2 = Math.floor(Math.random()*6) +1 ;
var secondDice = "images/dice"+randomNumber2+".png";
var img2 = document.querySelectorAll("img.img2")[0];
img2.setAttribute("src",secondDice);
return randomNumber2;
}


