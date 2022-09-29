/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  var pronoun = ["the", "our", "she"];
  var adj = ["great", "big", "small"];
  var noun = ["jogger", "racoon", "bear"];
  //var ext = [".es", ".com", ".org"];

  let numPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  let numAdj = adj[Math.floor(Math.random() * adj.length)];
  let numNoun = noun[Math.floor(Math.random() * noun.length)];
  //let numExt = ext[Math.floor(Math.random() * ext.length)];

  //let dominio = pronoun[numPronoun] + adj[numAdj] + noun[numNoun] + ext[numExt];

  let result = "";
  //document.getElementById("dominion").innerHTML = dominio;
  /*for (let i = 0; i < dominio.length; i++) {
    
  }*/

  for (let i = 0; i < pronoun.length; i++) {
    result = pronoun[i];
    for (let j = 0; j < adj.length; j++) {
      result = pronoun[i] + adj[j];
      for (let n = 0; n < noun.length; n++) {
        result = pronoun[i] + adj[j] + noun[n];
      }
    }
    //return pronoun[i] + adj[j] + noun[n];
  }
  console.log(result);

  console.log("Hello Rigo from the console!");
};
