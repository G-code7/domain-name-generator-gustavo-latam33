/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// El codigo comienza a partir de acá

let pronoun = ["el", "la", "tu"];
let adj = ["fantástico", "enorme", "magnífico"];
let noun = ["cafes", "cardio", "venus"];
let extensions = [".com", ".net", ".us", ".io"];
let domainHacks = ["es", "io", "us"];

function generateDomains() {
  let domainList = document.getElementById("domain-list");
  domainList.innerHTML = "";

  for (let pronounItem of pronoun) {
    for (let adjItem of adj) {
      for (let nounItem of noun) {
        for (let ext of extensions) {
          let domain = pronounItem + adjItem + nounItem + ext;
          console.log(domain);
          let div = document.createElement("div");
          div.className = "domain-item";
          div.textContent = domain;
          domainList.appendChild(div);
        }
      }
    }
  }

  // combinaciones de domain hacks
  for (let pronounItem of pronoun) {
    for (let adjItem of adj) {
      for (let nounItem of noun) {
        for (let hack of domainHacks) {
          if (nounItem.endsWith(hack)) {
            let hackedDomain =
              nounItem.substring(0, nounItem.length - hack.length) + "." + hack;
            let domain = pronounItem + adjItem + hackedDomain;
            console.log(domain);
            let div = document.createElement("div");
            div.className = "domain-item";
            div.textContent = domain;
            domainList.appendChild(div);
          }
        }
      }
    }
  }
}

// botón
document
  .getElementById("generate-btn")
  .addEventListener("click", generateDomains);
