// переменные aboutPopup
const aboutButton = document.querySelector('.profile__button-edit');
const aboutPopup = document.querySelector('.popup_about');
const aboutCloseButton = aboutPopup.querySelector('.popup__close');
const aboutAddButton = document.querySelector('.popup__button');
const aboutnForm = document.querySelector('.popup__form-about');
const nameInput = document.querySelector('.popup__input_text_name');
const workInput = document.querySelector('.popup__input_text_work');
const profileName = document.querySelector('.profile__info-name');
const profileWork = document.querySelector('.profile__info-work');
// закрытие попапа
function closePopup(popup) {
    popup.classList.remove('popup_open');
}
function openPopup(popup) {
    popup.classList.add('popup_open');
}
// нажатия кнопок 
aboutButton.addEventListener('click', (event) => {
    //  для того чтобы не переходить по форме
    event.preventDefault();
    openPopup(aboutPopup);
    nameInput.value = profileName.textContent;
    workInput.value = profileWork.textContent;
});
aboutCloseButton.addEventListener('click', () => {
    closePopup(aboutPopup);
});
// чтение из формы
function handleAboutFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileWork.textContent = workInput.value;
    closePopup(aboutPopup);
}
aboutnForm.addEventListener('submit', handleAboutFormSubmit);
// массив карточек
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
// скрипт для placePopup
// переменные placePopup
const placeButton = document.querySelector('.profile__button-add');
const placePopup = document.querySelector('.popup_place');
const placeCloseButton = document.querySelector('.popup__close-place');
const placeAddButton = document.querySelector('.popup__button-place');
const placeForm = document.querySelector('.popup__form-place');
const cardContainer = document.querySelector('.group');
const cardTemplate = document.querySelector('.group-template');
// groupPopup
const groupImage = document.querySelector('.popup-image__image');
const groupText = document.querySelector('.popup-image__text');
const groupPopup = document.querySelector('.popup-image');
const groupCloseButton = document.querySelector('.popup__close-group');
// открытие попапа
placeButton.addEventListener('click', (event) => {
    event.preventDefault();
    openPopup(placePopup);
});
// кнопка закрыть placePopup
placeCloseButton.addEventListener('click', () => {
    closePopup(placePopup);
});
// кнопка закрыть groupPopup
groupCloseButton.addEventListener('click', () => {
    closePopup(groupPopup);
});
// функция удаления
function deleteCard(evt) {
    const card = evt.target.closest('.group__element').remove();
}
// функция удаления карточек
function deleteCardEvent(card) {
    const deleteButton = card.querySelector(".group__image-trash");
    deleteButton.addEventListener('click', deleteCard);
}
placeForm.addEventListener('submit', addCardSubmitHandler);
// начальное создание карточек
function createCard(text) {
    const card = cardTemplate.content.cloneNode(true);
    // кнопка лайка
    const likeButton = card.querySelector('.group__like');
    likeButton.addEventListener('click', function (evt) {
        evt.target.classList.toggle('group__like_active');
    });
    const cardText = card.querySelector('.group__element-name');
    cardText.textContent = text.name;
    const cardImage = card.querySelector('.group__element-image');
    cardImage.src = text.link;
    cardImage.alt = text.name;
    cardImage.addEventListener('click', () => {
        groupImage.src = cardImage.src;
        groupText.textContent = cardText.textContent;
        groupImage.alt = cardText.textContent;
        openPopup(groupPopup);
    })
    deleteCardEvent(card);
    return card;
}
// начальная публикация карточек
function renderCards() {
    initialCards.reverse().forEach(item => {
        const cardHtml = createCard(item);
        addCardToSection(cardHtml);
    })
};
renderCards();
// добавление карточки через попап
function addCardSubmitHandler(event) {
    event.preventDefault();
    const placeInput = document.querySelector('.popup__input_text_place').value;
    const imageInput = document.querySelector('.popup__input_text_image').value;
    const group = createCard({ name: placeInput, link: imageInput });
    placeForm.reset();
    addCardToSection(group);
    closePopup(placePopup);
}
// для записывания карточек
function addCardToSection(card) {
    cardContainer.prepend(card);
};