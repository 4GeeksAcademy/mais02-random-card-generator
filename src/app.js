import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let card = document.getElementsByClassName("card")[0];

  let randomNum = Math.floor(Math.random() * 13) + 1;
  let p = document.getElementById("cardnum");
  let royalty = randomNum == 1 ? "A" : randomNum == 11 ? "J" : randomNum == 12 ? "Q" : randomNum == 13 ? "K" : randomNum;
  p.textContent = royalty;

  let diamond = document.getElementsByClassName("diamond")[0];
  let heart = document.getElementsByClassName("heart")[0];
  let spade = document.getElementsByClassName("spade")[0];
  let club = document.getElementsByClassName("club")[0];
  diamond.style.display = "none";
  heart.style.display = "none";
  spade.style.display = "none";
  club.style.display = "none";

  let suits = [];
  suits.push(diamond, heart, spade, club);
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  randomSuit.id = 'randomSuitcss';
  randomSuit.style.display = "inline-block"

  let mirror = randomSuit.cloneNode(true);
  mirror.id = 'mirrorcss';
  randomSuit.parentElement.appendChild(mirror);
  mirror.style.display = "inline-block";

  card.removeAttribute("hidden");

};
