import { groupImage as popupImage, groupText as popupText, groupPopup as popup } from './index.js'
class Card {
    constructor(template, item, openPopup) {
        this._template = template;
        this._name = item.name;
        this._src = item.link;
        this._openPopup = openPopup;
        // для функций
        this._deleteCard = this._deleteCard.bind(this);
        this._openPlacePopup = this._openPlacePopup.bind(this);
        this._likeCard = this._likeCard.bind(this);
    }
    _getElementFromTemplate() {
        return document.querySelector(this._template).content.querySelector('.card').cloneNode(true);
    }
    _addEventListeners() {
        this._trash.addEventListener('click', this._deleteCard);
        this._like.addEventListener('click', this._likeCard);
        this._image.addEventListener('click', this._openPlacePopup);
    }
    _deleteCard = () => {
        this._element.remove();
    }
    _likeCard = () => {
        this._like.classList.toggle('card__like_active');
    }
    _openPlacePopup = () => {
        popupText.textContent = this._place.textContent;
        popupImage.src = this._image.src;
        popupImage.alt = this._place.textContent;
        this._openPopup(popup);
    }
    getElement() {
        this._element = this._getElementFromTemplate();
        // переменные
        this._like = this._element.querySelector('.card__like');
        this._trash = this._element.querySelector('.card__trash');
        this._image = this._element.querySelector('.card__image');
        this._place = this._element.querySelector('.card__name');
        // тут принимаем имена
        this._place.textContent = this._name;
        this._image.src = this._src;
        this._image.alt = this._name;
        this._addEventListeners();
        return this._element;
    }
}
export default Card;