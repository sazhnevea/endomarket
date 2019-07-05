const searchButton = document.querySelector('.page-header__search');
const modalSearch = document.querySelector('.page-header__modal-search');

searchButton.addEventListener(`click`, () => {
  searchButton.classList.toggle('page-header__search--closed');
  searchButton.classList.toggle('page-header__search--opened');
  modalSearch.classList.toggle('search--show');
})

