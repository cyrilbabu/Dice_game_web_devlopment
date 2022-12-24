
var n = Math.floor((Math.random()*6)+1);

var img_name_1 = "images/dice" + n + ".png"

document.querySelectorAll("img")[0].setAttribute("src" , img_name_1);

var m = Math.floor((Math.random()*6)+1);

img_name_2 = "images/dice" + m + ".png"

document.querySelectorAll("img")[1].setAttribute("src" , img_name_2);

if(n>m){
  document.querySelector("h1").innerHTML = "player1 win!";
}

else if (m>n){
  document.querySelector("h1").innerHTML = "player2 win!";
}

else{
  document.querySelector("h1").innerHTML = "draw!";
}
