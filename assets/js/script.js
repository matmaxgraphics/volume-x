"use strict";

const menuDropdown = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");

menuDropdown.classList.add("hidden");

hamburger.addEventListener('click', function(){
    // menuDropdown.style.display = "block";
    menuDropdown.classList.toggle("hidden");
    menuDropdown.classList.toggle("toggleShow");
})
