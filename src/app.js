/* eslint-disable */

import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector(".card").innerHTML = generateRandomNumber();
  document.querySelector(".card").classList.add(generateRandomSuit());
};

let generateRandomNumber = () => {
  let Numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let indexNumbers = Math.floor(Math.random() * Numbers.length);

  return Numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let Suits = ["diams", "spades", "clubs", "hearts"];
  let indexSuits = Math.floor(Math.random() * Suits.length);

  return Suits[indexSuits];
};
