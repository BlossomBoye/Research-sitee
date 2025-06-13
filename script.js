// Toggle mobile menu
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Basic form check
const form = document.getElementById('questionForm');
if (form) {
  form.addEventListener('submit', e => {
    const name = form.name.value.trim();
    const email = form._replyto.value.trim();
    const msg = form.message.value.trim();
    if (!name || !email || !msg) {
      e.preventDefault();
      alert('Please fill in all fields.');
    }
  });
}