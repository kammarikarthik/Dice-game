var randomNumber1=Math.floor(Math.random()*6);
var randomDiceimg="dice"+randomNumber1+".png";
var randomDiceimgSource="images/"+randomDiceimg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceimgSource);
var randomNumber2=Math.floor(Math.random()*6);
var randomDiceimg="dice"+randomNumber2+".png";
var randomDiceimgSource="images/"+randomDiceimg;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceimgSource);

if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="🚩player 1 wins!";
else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML="🚩player 2 wins!";
else
document.querySelector("h1").innerHTML="Draw!";
function click()
{
   location.reload();
}