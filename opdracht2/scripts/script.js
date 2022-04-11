// JavaScript Document
console.log("howdy");

var filterGrid = document.querySelector("#filter-grid");
var filterList = document.querySelector("#filter-list");
var filterLocation = document.querySelector("#filter-location");
var filterTagged = document.querySelector("#filter-tagged");




/* laat de radio buttons luisteren naar wijzigingen */
// addEventListener
// roep dan steeds dezelfde functie aan

filterGrid.addEventListener("change", filterenMaar);
filterList.addEventListener("change", filterenMaar);
filterLocation.addEventListener("change", filterenMaar);
filterTagged.addEventListener("change", filterenMaar);


/* maak die functie aan */
// zoek de ul op en stop die in een variabele
// sla de value van de gekozen radio button op in een variabele --> event.target.value
// verwijder de huidige class van de ul --> deLijst.className = "";
// voeg de de nieuwe value als class toe aan de ul --> gebruik daarvoor de variabele van 2 regels omhoog

function filterenMaar(event) {
  let hetNieuweFilter = event.target.value;
  
  let deLijst = document.querySelector("section:nth-of-type(3) ul");
  
  // oude class weghalen - ik weet alleen niet welke van de 4 - daarom allemaal
  deLijst.classList.remove("grid");
  deLijst.classList.remove("list");
  deLijst.classList.remove("location");
  deLijst.classList.remove("tagged");
  
  // nieuwe class toevoegen
  deLijst.classList.add(hetNieuweFilter);
  
}