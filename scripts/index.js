// переменные aboutPopup
const aboutButton = document.querySelector('.profile__button-edit');
const aboutPopup = document.querySelector('.popup_about');
const aboutCloseButton = aboutPopup.querySelector('.popup__close');
const aboutAddButton = document.querySelector('.popup__button');
let aboutnForm = document.querySelector('.popup__form-about');
let nameInput = document.querySelector('.popup__input_text_name');
let workInput = document.querySelector('.popup__input_text_work');
let profileName = document.querySelector('.profile__info-name');
let profileWork = document.querySelector('.profile__info-work');
// нажатия кнопок 
aboutButton.addEventListener('click', (event) => {
    //  для того чтобы не переходить по форме
    event.preventDefault();
    aboutPopup.classList.add('popup_open');
    nameInput.value = profileName.textContent;
    workInput.value = profileWork.textContent;
});
aboutCloseButton.addEventListener('click', (event) => {
    aboutPopup.classList.remove('popup_open');
    // placePopup.classList.remove('popup_open');
});
aboutPopup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        aboutPopup.classList.remove('popup_open');
        // placePopup.classList.remove('popup_open');
    }
});
aboutAddButton.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        aboutPopup.classList.remove('popup_open');
    }
});
// чтение из формы
function handleFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileWork.textContent = workInput.value;
}
aboutnForm.addEventListener('submit', handleFormSubmit);
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
let placeForm = document.querySelector('.popup__form-place');
const cardContainer = document.querySelector('.group');
const cardTemplate = document.querySelector('.group-template');
// groupPopup
const groupImage = document.querySelector('.popup-image__image');
const groupText = document.querySelector('.popup-image__text');
const groupPopup = document.querySelector('.popup-image');
// открытие попапа
placeButton.addEventListener('click', (event) => {
    event.preventDefault();
    placePopup.classList.add('popup_open');
});
// кнопка закрыть placePopup
placeCloseButton.addEventListener('click', (event) => {
    placePopup.classList.remove('popup_open');
});
// закрытие placePopup
placePopup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        placePopup.classList.remove('popup_open');
    }
});
// закрытие placePopup при нажатии кнопки Сохранить
placeAddButton.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        placePopup.classList.remove('popup_open');
    }
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
// Создание карточки, при добавлении карточки
function PlaceAddCard(event) {
    event.preventDefault();
    addCard();
}
placeForm.addEventListener('submit', PlaceAddCard);
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
    cardImage.addEventListener('click', (evt) => {
        groupImage.src = cardImage.src;
        groupText.textContent = cardText.textContent;
        groupImage.alt = cardText.textContent;
        addPopup();
    })
    deleteCardEvent(card);
    return card;
}
// открытие попапа 
function addPopup() {
    const groupCloseButton = document.querySelector('.popup__close-group');
    // открытие попапа
    groupPopup.classList.add('popup_open');
    groupPopup.addEventListener('click', (event) => {
        if (event.target === event.currentTarget) {
            groupPopup.classList.remove('popup_open');
        }
    });
    groupCloseButton.addEventListener('click', (event) => {
        groupPopup.classList.remove('popup_open');
    });
};
// начальная публикация карточек
function renderCards() {
    initialCards.reverse().forEach(item => {
        const cardHtml = createCard(item);
        addCards(cardHtml);
    })
};
renderCards();
// добавление карточки через попап
function addCard() {
    const placeInput = document.querySelector('.popup__input_text_place').value;
    const imageInput = document.querySelector('.popup__input_text_image').value;
    const group = createCard({ name: placeInput, link: imageInput });
    const form = document.querySelector('.popup__form-place');
    form.reset();
    addCards(group);
}
// для записывания карточек
function addCards(evt) {
    cardContainer.prepend(evt);
};