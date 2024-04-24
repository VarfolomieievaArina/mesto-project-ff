// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const content = document.querySelector('.content');
const placesList = document.querySelector('.places__list');
  
// @todo: Функция создания карточки
function createCards(card, removeCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteCardButton = cardElement.querySelector('.card__delete-button');
    
    cardElement.querySelector('.card__title').textContent = card.name;
    cardElement.querySelector('.card__image').src = card.link;

    deleteCardButton.addEventListener('click', () => {removeCard(cardElement)});
    return cardElement;
}

// @todo: Функция удаления карточки
function removeCard (card) {
    card.remove();
  }

// @todo: Вывести карточки на страницу
function showInitialCards() {
    initialCards.forEach((card) => {
    placesList.append(createCards(card, removeCard));
   })
}
showInitialCards();
