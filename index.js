document.getElementById(
  "copyright-year"
).innerHTML = `${new Date().getFullYear()}`;

const openMenuButton = document.querySelector('.header__button-nav');
const popup = document.querySelector('.popup');
const cardsChips = document.querySelectorAll('.product-card_chips');
const cardsPasta = document.querySelectorAll('.product-card_pasta');
const cardsYopokki = document.querySelectorAll('.product-card_yopokki');
const previousButtonChips = document.querySelector('.products__slider-chips-button_previous');
const nextButtonChips = document.querySelector('.products__slider-chips-button_next');
const previousButtonPasta = document.querySelector('.products__slider-pasta-button_previous');
const nextButtonPasta = document.querySelector('.products__slider-pasta-button_next');
const previousButtonYopokki = document.querySelector('.products__slider-yopokki-button_previous');
const nextButtonYopokki = document.querySelector('.products__slider-yopokki-button_next');

let cardChipsIndex = 0;
let cardPastaIndex = 0;
let cardYopokkiIndex = 0;


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

function showChips(index) {
  cardsChips[cardChipsIndex].classList.add('product-card_hidden');
  cardsChips[index].classList.remove('product-card_hidden');
  cardChipsIndex = index;
};

function showPasta(index) {
  cardsPasta[cardPastaIndex].classList.add('product-card_hidden');
  cardsPasta[index].classList.remove('product-card_hidden');
  cardPastaIndex = index;
};

function showYopokki(index) {
  cardsYopokki[cardYopokkiIndex].classList.add('product-card_hidden');
  cardsYopokki[index].classList.remove('product-card_hidden');
  cardYopokkiIndex = index;
};

previousButtonChips.addEventListener('click', () => {
  let index = cardChipsIndex - 1;
  if (index < 0) {
    index = cardsChips.length - 1
  }

  showChips(index)
});

nextButtonChips.addEventListener('click', () => {
  let index = cardChipsIndex + 1;
  if (index >= cardsChips.length) {
    index = 0;
  }

  showChips(index)
});

previousButtonPasta.addEventListener('click', () => {
  let index = cardPastaIndex - 1;
  if (index < 0) {
    index = cardsPasta.length - 1
  }

  showPasta(index)
});

nextButtonPasta.addEventListener('click', () => {
  let index = cardPastaIndex + 1;
  if (index >= cardsPasta.length) {
    index = 0;
  }

  showPasta(index)
});

previousButtonYopokki.addEventListener('click', () => {
  let index = cardYopokkiIndex - 1;
  if (index < 0) {
    index = cardsYopokki.length - 1
  }

  showYopokki(index)
});

nextButtonYopokki.addEventListener('click', () => {
  let index = cardYopokkiIndex + 1;
  if (index >= cardsYopokki.length) {
    index = 0;
  }

  showYopokki(index)
});

showChips(cardChipsIndex);
showPasta(cardPastaIndex);
showYopokki(cardYopokkiIndex);
