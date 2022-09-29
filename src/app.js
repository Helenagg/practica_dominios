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

  //let result = "";
  for (let i = 0; i < pronoun.length; i++) {
    pronoun[i];
    for (let j = 0; j < adj.length; j++) {
      pronoun[i] + adj[j];
      for (let n = 0; n < noun.length; n++) {
        console.log(pronoun[i] + adj[j] + noun[n]);
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
