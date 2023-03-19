// import '../pages/index.css'; // добавьте импорт главного файла стилей 
// импорт проверки формы
import FormValidator from '../scripts/FormValidator.js';
// импорт класса 
import Card from '../scripts/Card.js';
// импорт popup 
import UserInfo from '../scripts/UserInfo.js';
// импорт section
import Section from '../scripts/Section.js';
// импорт PopupWithForm
import PopupWithForm from '../scripts/PopupWithForm.js';
// импорт PopupWithImage
import PopupWithImage from '../scripts/PopupWithImage.js';
// импорт переменных
import {
    initialCards,
    configForm,
    config,
    // попапы 
    aboutPopup, placePopup, groupPopup,
    // инпуты 
    workInput,nameInput,
    // ячейки для редактирования
    profileName, profileWork,
    // кнопочки
    aboutButton, placeButton
} from '../unils/constants.js'
// начало работы с валидацией
const formProfile = document.querySelector('.popup__form');
const formPlace = document.querySelector('.popup__form-place');
// валидация редактирования профиля
const formProfileValidation = new FormValidator(configForm, formProfile);
formProfileValidation.enableValidation();
// // валидация добавления места
const formPlaceValidation = new FormValidator(configForm, formPlace);
formPlaceValidation.enableValidation();
// работа с попапом редактирования 
const infoProfile = new UserInfo(profileName, profileWork);
// попап редактирокания профиля
const popupEditProfile = new PopupWithForm({
    popupSelector: aboutPopup,
    submitForm: (data) => {
        infoProfile.setUserInfo({
            name: data.name,
            work: data.work,
        });
        popupEditProfile.close();
    }
})
popupEditProfile.setEventListeners();
// передача данных в попап
aboutButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    const dataProfile = infoProfile.getUserInfo();
    nameInput.value = dataProfile.name;
    workInput.value = dataProfile.work;
    popupEditProfile.open();
});
// закончилась работа в попапом
// генерация карточки
const popupImage = new PopupWithImage(groupPopup);
// функция генерафии карточек
function cardGenerate(item) {
    const task = new Card(config.selectorTemplatePlace, {
        items: item,
        handleCardClick: (name, src) => {
            popupImage.open({ name, src });
        }
    });
    return task.getElement();
}
// создание и добавление
const sectionAbout = new Section({
    items: initialCards,
    renderer: (item) => {
        sectionAbout.addItem(cardGenerate(item));
    }
},
'.group'
);
sectionAbout.renderItem();
// работа с попапом места
const popupAddCard = new PopupWithForm({
    popupSelector: placePopup,
    submitForm: (data) => {
        sectionAbout.addItem(cardGenerate(data));
        popupAddCard.close();
    }
})
// обработчик открытия попапап
placeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    popupAddCard.open();
});
popupAddCard.setEventListeners();