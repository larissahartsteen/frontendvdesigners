///////////////////////////
///////////////////////////
// variabelen /////////////
///////////////////////////
///////////////////////////
var aantalFollowers = 920;
var followButton = document.querySelector("#followButton");

var optionList = document.querySelector("#view-list");
var optionGrid = document.querySelector("#view-grid");
var optionSlideshow = document.querySelector("#view-slideshow");
var locationFilter = document.querySelector("#filter-location");
var taggedFilter = document.querySelector("#filter-tagged");

var previousButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");
var slides = document.getElementsByClassName('inList')

var currentSlide = 0;



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
// filter met radiobuttons  --> https://codepen.io/shooft/pen/NWwdaro?editors=0010 
/////////////////////////// --> https://codepen.io/shooft/pen/YzENrWE?editors=1000
///////////////////////////
optionList.addEventListener("change", showInList); // de radio buttons luisteren naar wijzigingen en voeren de function showInList, showInGrid of filterenMaar uit
optionGrid.addEventListener("change", showInGrid);
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
// Code that moves to the next slide
nextButton.addEventListener("click", function() {
        slides[currentSlide].classList.remove("active");
        currentSlide ++;
    if (currentSlide === slides.length)
        currentSlide = 0;
        slides[currentSlide].classList.add("active");
});


// Code that moves to the previous slide
previousButton.addEventListener("click", function () {
        slides[currentSlide].classList.remove("active");
        currentSlide --;
    if (currentSlide < 0)
        currentSlide = (slides.length - 1);
        slides[currentSlide].classList.add("active");
});









  
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
  
  