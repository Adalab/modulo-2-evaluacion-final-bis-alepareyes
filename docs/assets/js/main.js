"use strict";const inputs=document.querySelectorAll(".js-input"),cardsContainer=document.querySelector(".js-cards-container"),startButton=document.querySelector(".js-btn"),url="https://beta.adalab.es/ejercicios-extra/api/pokemon-cards/";function setDefaultInput(){const t=document.querySelector(".input4");t.checked=!0,t.click()}function getServerCards(){cardsContainer.innerHTML="";for(const t of inputs){const e=t.value;!0===t.checked&&fetch(`${url}${e}.json`).then(t=>t.json()).then(t=>createCard(t))}}function createCard(t){for(const e of t){const t=document.createElement("div");t.setAttribute("class","js-card card");const n=document.createElement("img");n.setAttribute("src",e.image),n.setAttribute("class","js-img img");const c=document.createElement("p");c.setAttribute("class","js-flip flip");const s=document.createTextNode("Who's That Pokémon?");c.appendChild(s),t.appendChild(n),cardsContainer.appendChild(t),t.appendChild(c)}listenCards(t),console.log("están saliendo "+t.length+" cartas"),console.log(t)}function stopBotton(t){t.preventDefault()}function listenCards(){const t=document.querySelectorAll(".js-card");for(const e of t)e.addEventListener("click",flipCard);console.log(t)}function flipCard(t){t.currentTarget.classList.add("clickedCard"),t.currentTarget.classList.remove("card")}startButton.addEventListener("click",getServerCards),startButton.addEventListener("click",stopBotton),setDefaultInput();