// Get the modal
const modal = document.getElementById("modal");

// Get the button that opens the modal
const btn1 = document.getElementsByClassName("open-modal")[0];
const btn2 = document.getElementsByClassName("open-modal")[1];

// Get the <span> element that closes the modal
const closeModal = document.getElementById("close-modal");

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const continueButton = document.querySelectorAll(".continue");
const successModal = document.getElementById("success-modal");


for(const btn of continueButton){
btn.onclick = function() {
    successModal.style.display = "block";
    modal.style.display = "none";
}}


const gotit = document.getElementById("gotit");
gotit.onclick = function() {
    successModal.style.display = "none";
    modal.style.display = "none";
}

//nav


const nav = document.getElementById("nav");
const hamb = document.getElementById("hamburger");
const close = document.getElementById("close");

hamb.addEventListener("click", ()=>{
    nav.style.display = 'block';
    hamb.classList.toggle("hidden");
    close.classList.toggle("hidden");
});

close.addEventListener("click", ()=>{
    nav.style.display = 'none';
    hamb.classList.toggle("hidden");
    close.classList.toggle("hidden");
});


function radioCheck(radio) {
    data = radio.getAttribute("data")
    
    // Hide all divs
    
    for (let i = 0; i < 2; i++) { // assuming your data attr 1,2,3,..,N
        let el = 'ifRadio' + (i + 1); // ifRadio1, ifRadio2, etc
        document.getElementById(el).style.display = "none";
        let card = 'ifRadio' + (i + 1) + 'card';
        document.getElementById(card).style.border = "1px solid var(--clr-Dark-gray)";
    }
    
    // Show the current div
    
    let el = 'ifRadio' + (data); // ifRadio1, ifRadio2, etc
    document.getElementById(el).style.display = "flex";
    let card = 'ifRadio' + (data) + 'card';
    document.getElementById(card).style.border = "2px solid var(--clr-Moderate-cyan)";
}