import { groupImage as popupImage, groupText as popupText, groupPopup as popup } from './index.js'
class Card {
    constructor(template, item) {
        this._template = template;
        this._name = item.name;
        this._src = item.link;

        this._deleteCard = this._deleteCard.bind(this);
        this._openPlacePopup = this._openPlacePopup.bind(this);
        this._likeCard = this._likeCard.bind(this);
    }
    _getElementFromTemplate() {
        return document.querySelector(this._template).content.querySelector('.group__element').cloneNode(true);
    }
    _addEventListeners() {
        this._element.querySelector('.group__trash').addEventListener('click', this._deleteCard);
        this._element.querySelector('.group__like').addEventListener('click', this._likeCard);
        this._element.querySelector('.group__element-image').addEventListener('click', this._openPlacePopup);
    }
    _deleteCard = () => {
        const deleteCard = this._element.querySelector('.group__trash').closest('.group__element');
        deleteCard.remove();
    }
    _likeCard = () => {
        this._element.querySelector('.group__like').classList.toggle('group__like_active');
    }
    _openPlacePopup = () => {
        popupText.textContent = this._element.querySelector('.group__element-name').textContent;
        popupImage.src = this._element.querySelector('.group__element-image').src;
        popup.classList.add('popup_open');
    }
    getElement() {
        this._element = this._getElementFromTemplate();
        // тут принимаем имена
        this._element.querySelector('.group__element-name').textContent = this._name;
        this._element.querySelector('.group__element-image').src = this._src;
        this._element.querySelector('.group__element-image').alt = this._name;

        this._addEventListeners();
        return this._element;
    }
}
export default Card;