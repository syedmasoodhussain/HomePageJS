let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click", () => {
    banner.classList.toggle("night");
    // Toggle icon visibility
    dayNight.querySelectorAll("ion-icon").forEach(icon => icon.classList.toggle("hidden"));
});

   
let typingEffect = new Typed("#text", {
    strings: ["Home", "About", "Contact", "work"], // Array of strings to display
    loop: true, // Whether to loop through the strings continuously
    typeSpeed: 100, // Typing speed in milliseconds
    backSpeed: 50, // Backspacing speed in milliseconds
    backDelay: 1000 // Delay before starting to backspace in milliseconds
});


let typingEffects = new Typed("#texts", {
    strings: ["Contact", "Me"], // Array of strings to display
    loop: true, // Whether to loop through the strings continuously
    typeSpeed: 100, // Typing speed in milliseconds
    backSpeed: 50, // Backspacing speed in milliseconds
    backDelay: 1000 // Delay before starting to backspace in milliseconds
});
