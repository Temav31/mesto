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
import PopupWithImage from '../components/PopupWithImage.js';
// импорт PopupDelete
import PopupDelete from '../components/PopupDelete.js';
// импорт апи
import Api from '../components/Api';
// импорт переменных
import {
    initialCards,
    configForm,
    config,
    // попапы 
    aboutPopup, placePopup, groupPopup, deletePopup, imagePopup,
    // инпуты 
    workInput, nameInput,
    // ячейки для редактирования
    profileName, profileWork, profileImage,
    // кнопочки
    aboutButton, placeButton,
    imageProfile, imageButtonProfile
} from '../utils/constants.js'
// начало работы с валидацией
const formProfile = document.querySelector('.popup__form-about');
const formPlace = document.querySelector('.popup__form-place');
// валидация редактирования профиля
const formProfileValidation = new FormValidator(configForm, formProfile);
formProfileValidation.enableValidation();
// // валидация добавления места
const formPlaceValidation = new FormValidator(configForm, formPlace);
formPlaceValidation.enableValidation();
// валидация изменения аватара
const formProfileImage = document.querySelector('.popup_type_profile');
const formProfileImageValidation = new FormValidator(configForm, formProfileImage);
formProfileImageValidation.enableValidation();
// работа с апи
// Токен: 1a6e0a32-00a7-4ba0-818b-d0147d70095f
// Идентификатор группы: cohort-62
const api = new Api('https://mesto.nomoreparties.co/v1/cohort-62', '1a6e0a32-00a7-4ba0-818b-d0147d70095f');
// переменная
let currentUser;
// 
Promise.all([api.getCard(), api.getProfile()])
    .then(([items, user]) => {
        currentUser = user._id;
        sectionAbout.renderItem(items);
    })
    .catch((err) => {
        console.log(err);
    })
// работа с попапом редактирования 
const infoProfile = new UserInfo(profileName, profileWork, profileImage);
// записываем значения 
api.getProfile().then((items) => {
    infoProfile.setUserInfo({
        name: items.name,
        about: items.about,
        avatar: items.avatar
    })
})
    .catch((err) => {
        // обработка ошибки
        console.log(err);
    })
// попап редактирокания профиля
const popupEditProfile = new PopupWithForm({
    popupSelector: aboutPopup,
    submitForm: (data) => {
        popupEditProfile.update(true);
        api.editProfile(data)
            .then((data) => {
                infoProfile.setUserInfo({
                    name: data.name,
                    about: data.about,
                    avatar: data.avatar
                }),
                    popupEditProfile.close();
            })
            .catch((err) => {
                // обработка ошибки
                console.log(err);
            })
            .finally(() => {
                popupEditProfile.update(false);
            })
    }
})
popupEditProfile.setEventListeners();
function updateInfoProfile({ name, about }) {
    nameInput.value = name;
    workInput.value = about;
}
// передача данных в попап
aboutButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    const dataProfile = infoProfile.getUserInfo();
    updateInfoProfile({
        name: dataProfile.name,
        about: dataProfile.about,
    })
    // })
    popupEditProfile.open();
});
// закончилась работа в попапом
// генерация карточки
const popupImage = new PopupWithImage(groupPopup);
popupImage.setEventListeners();
const popupRemove = new PopupDelete(deletePopup);
popupRemove.setEventListeners();
// функция генерафии карточек
function generateCard(item) {
    const task = new Card(config.selectorTemplatePlace, currentUser, {
        items: item,
        handleCardClick: (name, link) => {
            popupImage.open({ name, link });
        },
        handelCardDelete: () => {
            popupRemove.open();
            popupRemove.deleteCard(() => {
                api.removeCard(task.getApiId())
                    .then(() => {
                        task.deleteCard();
                        popupRemove.close();
                    })
                    .catch((err) => {
                        // обработка ошибки
                        console.log(err);
                    })
            })
        },
        handelCardLike: (id) => {
            api.likeCard(id)
                .then((result) => {
                    // console.log(result);
                    task.likeCard(result);
                })
                .catch((err) => {
                    // обработка ошибки
                    console.log(err);
                })
        },
        handelCardDeleteLike: (id) => {
            api.deleteLikeCard(id)
                .then((result) => {
                    task.likeCard(result);
                })
                .catch((err) => {
                    // обработка ошибки
                    console.log(err);
                })
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
// работа с попапом места
const popupAddCard = new PopupWithForm({
    popupSelector: placePopup,
    submitForm: (data) => {
        popupAddCard.update(true);
        api.addCard(data).then((newData) => {
            sectionAbout.addItem(generateCard(newData));
            popupAddCard.close();
        })
            .catch((err) => {
                // обработка ошибки
                console.log(err);
            })
            .finally(() => {
                popupAddCard.update(false);
            })
    }
})
// обработчик открытия попапап
placeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    popupAddCard.open();
});
popupAddCard.setEventListeners();
// работа с формой
const popupAddImage = new PopupWithForm({
    popupSelector: imagePopup,
    submitForm: (data) => {
        popupAddImage.update(true);
        api.editProfileImage(data)
            .then((data) => {
                infoProfile.setUserInfo({
                    name: data.name,
                    about: data.about,
                    avatar: data.avatar
                });
                popupAddImage.close();
            })
            .catch((err) => {
                // обработка ошибки
                console.log(err);
            })
            .finally(() => {
                popupAddImage.update(false);
            })
    }
})
imageButtonProfile.addEventListener('click', (evt) => {
    evt.preventDefault();
    popupAddImage.open();
})
popupAddImage.setEventListeners();