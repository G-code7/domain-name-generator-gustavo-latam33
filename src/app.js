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

  for (let pronounList of pronoun) {
    for (let adjList of adj) {
      for (let nounList of noun) {
        for (let ext of extensions) {
          let domain = pronounList + adjList + nounList + ext;
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
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let hack of domainHacks) {
          if (n.endsWith(hack)) {
            let hackedDomain =
              n.substring(0, n.length - hack.length) + "." + hack;
            let domain = p + a + hackedDomain;
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
