//Selectors
const nav__listitemdrop = document.querySelector('.nav__listitemdrop li');
const country = document.getElementById('country');

//Event Listeners
nav__listitemdrop.addEventListener('click', highlightRegion);

//Functions
function highlightRegion(event){
    //country.toggleAttribute('active');
    //console.log("hello");
    country.style.backgroundColor = "black";
}




