const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');

  toggle.classList.toggle('fa-bars');
  toggle.classList.toggle('fa-xmark');
});
