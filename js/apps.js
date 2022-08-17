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

const navBarList = document.getElementById("navbar__list");
//Variables
const sections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function buildNavbar() {
  let s = "";

  // loop that returns variable

  for (let i = 1; i <= 4; i++) {
    s += "<ui classmenu=menu__link><a>section</a>" + i + "</ul>";

    navBarList.innerHTML = s;
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
buildNavbar();
// Add class 'active' to section when near top of viewport
sections.classList.remove("Nav_class")

const options = {
  root: null,
  threshold: 1,
  margin: "-10px",
};

const observer = new IntersectionObserver(function (Enteries, observer) {
  Enteries.forEach((entry) => {
    entry.target.classList.toggle("Nav_class"); //style
  });
}, options);

sections.forEach((sec) => {
  observer.observe(sec);
});

// Scroll to anchor ID using scrollTO event
const links = document.querySelectorAll("a");
for (let i = 0; i < 1; i++) {
  links[i].setAttribute("nav", "section" + i);
}
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
links.forEach((link) => {
  link.addEventListener("click", () => {
    let l = document.getElementById(link.getAttribute("nav"));
    l.scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll to section on link click

// Set sections as active
