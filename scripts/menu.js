//toggle menu

const toggleBtn = document.getElementById('toggle');
const menu = document.getElementById('menu');

toggleBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    toggleBtn.classList.toggle('navbar__toggle--active');
    toggleBtn.classList.toggle('navbar__toggle');
    menu.classList.toggle('navbar__menu--active');
    menu.classList.toggle('navbar__menu')
}