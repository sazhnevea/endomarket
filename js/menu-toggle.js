
const menuButton = document.querySelector('.page-header__toggle');
const mainNav = document.querySelector('.main-nav');

menuButton.addEventListener(`click`, () => {
  menuButton.classList.toggle('page-header__toggle--opened');
  menuButton.classList.toggle('page-header__toggle--closed');
  mainNav.classList.toggle('main-nav--opened');
})
