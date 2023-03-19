export const aboutButton = document.querySelector('.profile__button-edit');
export const aboutPopup = document.querySelector('.popup_type_about');
export const nameInput = document.querySelector('.popup__input_text_name');
export const workInput = document.querySelector('.popup__input_text_work');
export const profileName = document.querySelector('.profile__info-name');
export const profileWork = document.querySelector('.profile__info-work');
export const placeButton = document.querySelector('.profile__button-add');
export const placePopup = document.querySelector('.popup_type_place');
export const groupPopup = document.querySelector('.popup_type_image');
export const initialCards = [
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
export const config = {
    selectorTemplatePlace: '.card-template',
}
export const configForm = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__error-text',
    errorClass: 'popup__error'
};