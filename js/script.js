document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');
  console.log('Menu toggle script loaded', { navToggle, navMenu });

  navToggle.addEventListener('click', () => {
    console.log('Hamburger clicked');
    navMenu.classList.toggle('nav-menu--visible');
  });
});
