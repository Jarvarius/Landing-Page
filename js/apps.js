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
const menu = document.querySelector("navbar__menu");
const nav = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
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
  for (let i = 0; i < sections.length; i++) {
    const Listitems = document.createElement("li");
    Listitems.innerText = sections[i].id;
    Listitems.addEventListener("click", function () {
      sections[i].scrollIntoView({ behavior: "smooth" });
    });
    nav.appendChild(Listitems);
  }
}
buildnav();
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
window.addEventListener("scroll", function () {
  sections.forEach(function (sections) {
    const link = sections.getBoundingClientRect();
    const isInViewport = link.top > 0 && link.top < window.innerHeight;
    if (isInViewport) {
      sections.classList.add("active-section");
      const nav = document.querySelectorAll("#navbar__menu li");
      nav.forEach(function (Listitems) {});
    } else {
      sections.classList.remove("active-section");
    }
  });
});
const smoothScroll = () => {
  document.querySelectorAll(".menu__link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(anchor.getAttribute("href"))({
        behavior: "smooth",
      });
    });
  });
};
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
// Set sections as active
