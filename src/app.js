/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".net", ".us", ".io"];

for (let i = 0; i < pronoun.length; i++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      for (let dot = 0; dot < domain.length; dot++) {
        let combination = `${pronoun[i]} ${adj[a]} ${noun[n]}${domain[dot]}`;
        console.log(combination);
      }
    }
  }
}
