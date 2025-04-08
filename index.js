document.getElementById(
  "copyright-year"
).innerHTML = `${new Date().getFullYear()}`;

const openMenuButton = document.querySelector('.header__button-nav');
const popup = document.querySelector('.popup');


openMenuButton.addEventListener('click', () => {
  if (openMenuButton.classList.contains('header__button-nav_opened')) {
    openMenuButton.classList.remove('header__button-nav_opened')
    popup.classList.remove('popup_opened')
  }
  else 
  {
    openMenuButton.classList.add('header__button-nav_opened')
    popup.classList.add('popup_opened')
  }
});