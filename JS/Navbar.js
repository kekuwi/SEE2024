const hamburger = document.querySelector('.hamburger-button');
const hamburgerUnderlay = document.querySelector('.hamburger-underlay');
const navMenu = document.querySelector('.nav-list');
let menuOpen = false;

hamburger.addEventListener('click', () => {
    if (menuOpen == false) {
        menuOpen = true;
        navMenu.style.display = 'block';
        hamburgerUnderlay.style.display = 'block';
        // hamburger.style.display = 'none';
    } else {
        menuOpen = false;
        navMenu.style.display = 'none';
        hamburgerUnderlay.style.display = 'none';
        // hamburger.style.display = 'block';
    }
});
hamburgerUnderlay.addEventListener('click', () => {
        menuOpen = false;
        navMenu.style.display = 'none';
        hamburgerUnderlay.style.display = 'none';
        // hamburger.style.display = 'block';
});
