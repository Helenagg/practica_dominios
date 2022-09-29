/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var ext = [".es", ".com", ".org"];

  let numPronoun = Math.floor(Math.random() * pronoun.length);
  let numAdj = Math.floor(Math.random() * adj.length);
  let numNoun = Math.floor(Math.random() * noun.length);
  let numExt = Math.floor(Math.random() * ext.length);

  let dominio = pronoun[numPronoun] + adj[numAdj] + noun[numNoun] + ext[numExt];

  let result;
  document.getElementById("dominion").innerHTML = dominio;
  /*for (let i = 0; i < dominio.length; i++) {
    
  }*/

  /*for (let i = 0; i < pronoun.length; i++) {
    result += pronoun[i];
    for (let j = 0; j < adj.length; j++) {
      result += adj[j];
      for (let n = 0; n < noun.length; n++) {
        result += noun[n];
      }
    }
    //return pronoun[i] + adj[j] + noun[n];
  }*/
  console.log(result);

  console.log("Hello Rigo from the console!");
};
