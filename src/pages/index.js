import './index.css'; // добавьте импорт главного файла стилей 
// импорт проверки формы
import FormValidator from '../components/FormValidator.js';
// импорт класса 
import Card from '../components/Card.js';
// импорт popup 
import UserInfo from '../components/UserInfo.js';
// импорт section
import Section from '../components/Section.js';
// импорт PopupWithForm
import PopupWithForm from '../components/PopupWithForm.js';
// импорт PopupWithImage
import PopupWithImage from '../components/PopupWithImage';
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
} from '../utils/constants.js'
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
function updateInfoProfile({name, work}){
    nameInput.value = name;
    workInput.value = work;
}
// передача данных в попап
aboutButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    const dataProfile = infoProfile.getUserInfo();
    updateInfoProfile({
        name: dataProfile.name,
        work: dataProfile.work,
    })
    
    popupEditProfile.open();
});
// закончилась работа в попапом
// генерация карточки
const popupImage = new PopupWithImage(groupPopup);
popupImage.setEventListeners();
// функция генерафии карточек
function generateCard(item) {
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
        sectionAbout.addItem(generateCard(item));
    }
},
'.group'
);
sectionAbout.renderItem();
// работа с попапом места
const popupAddCard = new PopupWithForm({
    popupSelector: placePopup,
    submitForm: (data) => {
        sectionAbout.addItem(generateCard(data));
        popupAddCard.close();
    }
})
// обработчик открытия попапап
placeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    popupAddCard.open();
});
popupAddCard.setEventListeners();