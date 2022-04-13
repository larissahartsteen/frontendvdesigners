///////////////////////////
///////////////////////////
// variabelen /////////////
///////////////////////////
///////////////////////////
var aantalFollowers = 920; // geeft nu 920 mee zodat als je de site opent je deze meteen al ziet
var followButton = document.querySelector("#followButton"); // zoekt de ID in html en geeft deze een variabel

var optionList = document.querySelector("#view-list");
var optionGrid = document.querySelector("#view-grid");
var optionSlideshow = document.querySelector("#view-slideshow");
var locationFilter = document.querySelector("#filter-location");
var taggedFilter = document.querySelector("#filter-tagged");

var previousButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");
var slides = document.getElementsByClassName('inList')
var currentSlide = 0; 

var deBanaan = document.querySelector('section:nth-of-type(3).swipeOverBanaan div');
var touchstartX = 0;
var touchendX = 0;
var bewegingsZone = deBanaan; // var bewegingsZone wordt deBanaan





///////////////////////////
///////////////////////////
// follow & unfollow button
///////////////////////////
///////////////////////////
followButton.onclick = function() { // als op follow button wordt geklikt --> deze function uitgevoerd
    if (followButton.innerText == "+ Follow") { // met innerText wordt de tekstinhoud van een element ingesteld of geretourneerd --> https://www.w3schools.com/jsref/prop_node_innertext.asp
        aantalFollowers++;
        followButton.innerText = "Unfollow";
        // wanneer de tekst (nummer) gelijk staat aan (==) '+ Follow' wordt er 1 bij opgeteld (++) en wordt de tekst veranderd naar 'Unfollow'
    } else if (followButton.innerText == "Unfollow") {
        aantalFollowers--;
        followButton.innerText = "+ Follow";
    }   // anders.. waneer de tekst gelijk staat aan (==) 'Unfollow' wordt er 1 bij afgetrokken (--) en wordt de tekst veranderd naar '+ Follow'
        followers.innerHTML = aantalFollowers; // met innerHTML wordt de HTML-inhoud (innerlijke HTML) van een element ingesteld of geretourneerd --> https://www.w3schools.com/jsref/prop_html_innerhtml.asp
}       // het aantal followers (Id in HTML) wordt (=) het nieuwe aantal volgers






///////////////////////////
///////////////////////////
// filter met radiobuttons  --> https://codepen.io/shooft/pen/NWwdaro?editors=0010 
/////////////////////////// --> https://codepen.io/shooft/pen/YzENrWE?editors=1000
///////////////////////////
optionList.addEventListener("change", showInList); // de radio buttons luisteren naar wijzigingen en voeren de function showInList, showInGrid, showInSlideshow of filterenMaar uit
optionGrid.addEventListener("change", showInGrid); // event wordt geactiveerd wanneer een wijziging in de waarde van het element wordt doorgevoerd door de gebruiker
optionSlideshow.addEventListener("change", showInSlideshow);
locationFilter.addEventListener("change", filterenMaar);
taggedFilter.addEventListener("change", filterenMaar);


function filterenMaar(event) {
    let hetNieuweFilter = event.target.value; // met event.target.value sla je de value van de gekozen radio button op in een variabele
    
    let deLijst = document.querySelector("section:nth-of-type(2) ul"); // zoekt de ul op en stop deze in een variabele

    deLijst.classList.remove("grid"); // verwijderd de huidige class van de ul
    deLijst.classList.remove("list");
    deLijst.classList.remove("slideshow");
    deLijst.classList.remove("location");
    deLijst.classList.remove("tagged");

    deLijst.classList.add(hetNieuweFilter); // voegt de nieuwe waarde als class toe aan de ul
}

function showInList() {
    let deLijst = document.querySelector("section:nth-of-type(2) ul"); // lijst in html wordt opgezocht
    deLijst.classList.remove("grid-view", "slideshow-view"); // class grid-view & slideshow)view worden verwijderd
    deLijst.classList.add("list-view"); // class list-view wordt toegevoegd
}

function showInGrid() {
    let deLijst = document.querySelector("section:nth-of-type(2) ul"); // lijst in html wordt opgezocht
    deLijst.classList.remove("list-view", "slideshow-view"); // class list-view & slideshow-view worden verwijderd
    deLijst.classList.add("grid-view"); // class grid-view wordt toegevoegd
}

function showInSlideshow() {
    let deLijst = document.querySelector("section:nth-of-type(2) ul"); // lijst in html wordt opgezocht
    deLijst.classList.remove("grid-view", "list-view"); // class grid-view & list-view worden verwijderd
    deLijst.classList.add("slideshow-view"); // class slideshow-view wordt toegevoegd
}




///////////////////////////
///////////////////////////
// slideshow //////////////
///////////////////////////
///////////////////////////
nextButton.addEventListener("click", function() { // als je op de 'nextButton' klikt wordt de volgende function uitgevoerd
        slides[currentSlide].classList.remove("active"); // var 'slides' neemt waarde van var 'currentSlide' en verwijderd de class 'active'
        currentSlide ++; // er wordt 1 bij opgeteld (++), de volgende slide wordt weergegeven
    if (currentSlide === slides.length) // === gelijk aan, moet zelfde type zijn zoals strings --> slides.length wijst naar de laatste slide in de lijst
        currentSlide = 0; // als de 'curentSlide' gelijk staat aan de lengte van de slides (laatste) gaat deze terug naar de eerste slide (0)
        slides[currentSlide].classList.add("active"); // var 'slides' neemt waarde van var 'currentSlide' en voegt hier de class 'active' aan toe
});


previousButton.addEventListener("click", function () { 
        slides[currentSlide].classList.remove("active"); 
        currentSlide --;
    if (currentSlide < 0)
        currentSlide = (slides.length - 1); 
        slides[currentSlide].classList.add("active");
});



function doorSlidesMetToetsen(event) {
    switch(event.key) { // bepaald welke toets is ingedrukt --> switch voert een codeblok uit, afhankelijk van verschillende acties

    case "ArrowLeft": // als dat de ArrowLeft is dan dit doen
        slides[currentSlide].classList.remove("active"); // var 'slides' neemt waarde van var 'currentSlide' en verwijderd de class 'active'
        currentSlide --; // er wordt 1 bij afgetrokken (--), de vorige slide wordt weergegeven
    if (currentSlide < 0) // als de 'currentSlide' een lagere waarde heeft dan 0..
        currentSlide = (slides.length - 1); // gaat het terug naar de laatste foto in de rij
        slides[currentSlide].classList.add("active"); // var 'slides' neemt waarde van var 'currentSlide' en voegt hier de class 'active' aan toe
    break; // break: het breekt uit de switch --> stopt de uitvoering van meer code in de switch

    case "ArrowRight": // als dat de ArrowRight is dan dit doen
        slides[currentSlide].classList.remove("active");
        currentSlide ++;
    if (currentSlide === slides.length)
        currentSlide = 0;
        slides[currentSlide].classList.add("active");
    break; // break: het breekt uit de switch --> stopt de uitvoering van meer code in de switch
    }
}
document.addEventListener('keydown', doorSlidesMetToetsen); // het document luistert naar toetsaanslagen --> bij een toetsaanslag wordt de functie doorSlidesMetToetsen uitgevoerd
  
  
  



///////////////////////////
///////////////////////////
// swipen /////////////////
///////////////////////////
///////////////////////////
bewegingsZone.addEventListener('touchstart', function(event) { // wanneer er over de banaan wordt geswiped wordt de volgende functie afgespeeld
    // touchstart is een lijst met de aanraakpunten die actief zijn geworden met de huidige gebeurtenis 
    // touchstart vindt plaats wanneer de gebruiker een element 'touched'
    touchstartX = event.changedTouches[0].screenX; 
}, false);

bewegingsZone.addEventListener('touchend', function(event) { // touchend is een lijst van de aanraakpunten die van het oppervlak zijn verwijderd (de reeks aanraakpunten die overeenkomen met vingers die het oppervlak niet meer raken)
    touchendX = event.changedTouches[0].screenX; 
    handleGesure();
}, false); 

function handleGesure() {
    if (touchendX < touchstartX) { // naar links swipen
        deBanaan.classList.add("erIsOverMijGeswipet"); // .erIsOverMijGeswipet wordt aan css toegevoegd en zorgt dat banaan van scherm af gaat
    }
    if (touchendX > touchstartX) { // naar rechts swipen
        deBanaan.classList.remove("erIsOverMijGeswipet");
    }
}








  
  



  
//   function toggleImage(){ // --> https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
//     var lijstMetLI = document.querySelectorAll('section:nth-of-type(2) ul li'); 
//     lijstMetLI.forEach(function(value, index, lijstObject) { // voor elk element in de lijst pak je uit de lijst, roept functie aan, verwacht drie
//         value.classList.toggle('hidden')
//     })
//   }
 
  
  
//   window.onload = function () {
//     if (sessionStorage.getItem("modal") === "none") {
//       document.getElementById("modal").style.display = "none";
//     }
//     document.getElementById("close").onclick = function () {
//       document.getElementById("modal").style.display = "none";
//       sessionStorage.setItem("modal", "none");
//     };
//   };