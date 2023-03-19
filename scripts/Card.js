class Card {
    constructor(template, {items, handleCardClick}) {
        this._template = template;
        this._name = items.name;
        this._src = items.link;
        this._handleCardClick = handleCardClick;
        // для функций
        this._deleteCard = this._deleteCard.bind(this);
        this._likeCard = this._likeCard.bind(this);
    }
    _getElementFromTemplate() {
        return document.querySelector(this._template).content.querySelector('.card').cloneNode(true);
    }
    _addEventListeners() {
        this._trash.addEventListener('click', this._deleteCard);
        this._like.addEventListener('click', this._likeCard);
        this._image.addEventListener('click', () => {
            this._handleCardClick(this._name, this._src)
        });
    }
    _deleteCard = () => {
        this._element.remove();
    }
    _likeCard = () => {
        this._like.classList.toggle('card__like_active');
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