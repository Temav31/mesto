// импорт проверки формы
import FormValidator from './FormValidator.js';
// импорт класса 
import Card from './Card.js';
// переменные aboutPopup
const aboutButton = document.querySelector('.profile__button-edit');
const aboutPopup = document.querySelector('.popup_type_about');
const aboutCloseButton = aboutPopup.querySelector('.popup__close');
const aboutnForm = document.querySelector('.popup__form-about');
const nameInput = document.querySelector('.popup__input_text_name');
const workInput = document.querySelector('.popup__input_text_work');
const profileName = document.querySelector('.profile__info-name');
const profileWork = document.querySelector('.profile__info-work');
// переменные placePopup
const placeButton = document.querySelector('.profile__button-add');
const placePopup = document.querySelector('.popup_type_place');
const placeCloseButton = document.querySelector('.popup__close-place');
const placeForm = document.querySelector('.popup__form-place');
const groupCloseButton = document.querySelector('.popup__close-group');
// для передачи значений из формы
const placeInput = document.querySelector('.popup__input_text_place');
const imageInput = document.querySelector('.popup__input_text_image');
// попап места, для передачи данных
const groupImage = document.querySelector('.popup__image-image');
const groupText = document.querySelector('.popup__text-image');
const groupPopup = document.querySelector('.popup_type_image');
// закрытие попапа
function closePopup(popup) {
    popup.classList.remove('popup_open');
    document.removeEventListener('keyup', escClosePopup);
}
function openPopup(popup) {
    popup.classList.add('popup_open');
    document.addEventListener('keyup', escClosePopup);
}
// при нажатии вне попапа
function outsideClosePopup(popup) {
    popup.addEventListener('click', (evt) => {
        if (evt.target === evt.currentTarget) {
            closePopup(popup);
        }
    });
}
// закрытие при нажатии кнопки esc
function escClosePopup(evt) {
    evt.preventDefault();
    if (evt.key === 'Escape') {
        const openPopup = document.querySelector('.popup_open');
        closePopup(openPopup);
    }
};
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
// закрывается вне папапа
outsideClosePopup(aboutPopup);
// чтение из формы
function handleAboutFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileWork.textContent = workInput.value;
    closePopup(aboutPopup);
}
aboutnForm.addEventListener('submit', handleAboutFormSubmit);
// скрипт для placePopup
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
const config = {
    selectorPlaceList: '.group',
    selectorTemplatePlace: '.card-template',
}
const tasksList = document.querySelector(config.selectorPlaceList);
// функция добавления функции
function cardGenerate(item) {
    const task = new Card(config.selectorTemplatePlace, item, openPopup);
    return task.getElement();
}
// начальная генерация карточек
for (const item of initialCards) {
    tasksList.append(cardGenerate(item));
}
// добавление карточки
placeForm.addEventListener('submit', addCardSubmitHandler);
function addCardSubmitHandler(event) {
    event.preventDefault();
    const group = ({ name: placeInput.value, link: imageInput.value });
    placeForm.reset();
    tasksList.append(cardGenerate(group));
    closePopup(placePopup);
}
// открытие попапа
placeButton.addEventListener('click', (event) => {
    event.preventDefault();
    openPopup(placePopup);
});
// // кнопка закрыть placePopup
placeCloseButton.addEventListener('click', () => {
    closePopup(placePopup);
});
// кнопка закрыть groupPopup
groupCloseButton.addEventListener('click', () => {
    closePopup(groupPopup);
});
// закрывается вне groupPopup
outsideClosePopup(groupPopup);
// // закрывается вне placePopup
outsideClosePopup(placePopup);
// валидация формы
// все настройки form
const configForm = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__error-text',
    errorClass: 'popup__error'
};
const formProfile = document.querySelector('.popup__form');
const formPlace = document.querySelector('.popup__form-place');
// валидация редактирования профиля
const formProfileValidation = new FormValidator(configForm, formProfile);
formProfileValidation.enableValidation();
// // валидация добавления места
const formPlaceValidation = new FormValidator(configForm, formPlace);
formPlaceValidation.enableValidation();
// передаёт данные в класс Card
export { groupImage, groupText, groupPopup };