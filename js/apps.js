/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const menu = document.querySelector('#navbar__menu');
const nav = document.querySelector('.navbar__list');

  const section = document.getElementById('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildnav() {
  

  for(let i = 0; i < section.length; i++){
    const Listitems = document.createElement('li');
    Listitems.innerText = section.innerText;
    const anchor = document.createAttribute('a');
    const sectionA = section[i].getAttribute('data-nav');
    const sectionAttribute = sectionA.replace(/\s/g, '').toLowerCase();

    anchor.innertext = sectionA;
    anchor.sectionAttribute('href')
    
  }
  
}

  
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Set sections as active
