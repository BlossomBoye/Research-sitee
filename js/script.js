// Grab your toggle button and the menu
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

// On click, add or remove the "nav-menu--visible" class
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-menu--visible');
});
