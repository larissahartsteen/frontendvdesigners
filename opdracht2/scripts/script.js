// console.log("hallo");

///////////////////////////
///////////////////////////
// variabelen /////////////
///////////////////////////
///////////////////////////
var aantalFollowers = 920;
var followButton = document.getElementById("followButton");

var gridFilter = document.querySelector("#filter-grid");
var listFilter = document.querySelector("#filter-list");
var locationFilter = document.querySelector("#filter-location");
var taggedFilter = document.querySelector("#filter-tagged");





///////////////////////////
///////////////////////////
// follow & unfollow button
///////////////////////////
///////////////////////////
followButton.onclick = function() { //als follow op button wordt geklikt --> deze function uitgevoerd
    if (followButton.innerText == "+ Follow") { // met innerText wordt de tekstinhoud van een element ingesteld of geretourneerd --> https://www.w3schools.com/jsref/prop_node_innertext.asp
        aantalFollowers++;
        followButton.innerText = "Unfollow";
        // wanneer de tekst gelijk staat aan (==) '+ Follow' wordt er 1 bij opgeteld (++) en wordt de tekst veranderd naar 'Unfollow'
    } else if (followButton.innerText == "Unfollow") {
        aantalFollowers--;
        followButton.innerText = "+ Follow";
    }   // anders.. waneer de tekst gelijk staat aan (==) 'Unfollow' wordt er 1 bij afgetrokke (--) en wordt de tekst veranderd naar '+ Follow'
        followers.innerHTML = aantalFollowers; // met innerHTML wordt de HTML-inhoud (innerlijke HTML) van een element ingesteld of geretourneerd --> https://www.w3schools.com/jsref/prop_html_innerhtml.asp
}       // het aantal followers (Id in HTML) wordt (=) het nieuwe aantal volgers






///////////////////////////
///////////////////////////
// filter met radiobuttons // --> https://codepen.io/shooft/pen/NWwdaro?editors=0010
///////////////////////////
///////////////////////////

gridFilter.addEventListener("change", filterenMaar); // de radio buttons luisteren naar wijzigingen en roepen steeds dezelfde functie aan
listFilter.addEventListener("change", filterenMaar);
locationFilter.addEventListener("change", filterenMaar);
taggedFilter.addEventListener("change", filterenMaar);


function filterenMaar(event) {
  let hetNieuweFilter = event.target.value; // met event.target.value sla je de value van de gekozen radio button op in een variabele
  
  let deLijst = document.querySelector("section:nth-of-type(2) ul"); // zoekt de ul op en stop deze in een variabele
  
  deLijst.classList.remove("grid"); // verwijderd de huidige class van de ul
  deLijst.classList.remove("list");
  deLijst.classList.remove("location");
  deLijst.classList.remove("tagged");
  
  deLijst.classList.add(hetNieuweFilter); // voegt de nieuwe waarde als class toe aan de ul
}