class Card {
    constructor(template, currentUser, { items, handleCardClick, handelCardDelete, handelCardLike, handelCardDeleteLike }) {
        this._template = template;
        this._currentUser = currentUser;
        this._name = items.name;
        this._src = items.link;
        this._items = items;
        this._handleCardClick = handleCardClick;
        this._handelCardDelete = handelCardDelete;
        this._handelCardDeleteLike = handelCardDeleteLike;
        this._handelCardLike = handelCardLike;
        // для удаления и лайков на карточке
        this._arrLikes = items.likes;
        this._numbers = items.likes.length;
        this._isOwner = items.owner._id === currentUser;
        this._id = items._id;
        // для функций
        this._countLikes = this._countLikes.bind(this);
    }
    getApiId() {
        return this._id;
    }
    _getElementFromTemplate() {
        return document.querySelector(this._template).content.querySelector('.card').cloneNode(true);
    }
    _addEventListeners() {
        this._trash.addEventListener('click', this._handelCardDelete);
        this._like.addEventListener('click', this._countLikes);
        this._image.addEventListener('click', () => {
            this._handleCardClick(this._name, this._src)
        });
    }
    deleteCard = () => {
        this._element.remove();
        this._element = null;
    }
    likeCard(items) {
        this._arrLikes = items.likes;
        this._numbers = items.likes.length;
        this._like.classList.toggle('card__like_active');
        this._likeNumbers.textContent = this._numbers;
    }
    // проверка карточек пользователя
    _checkUserTrash() {
        // удаление мусорки
        if (!this._isOwner) {
            this._trash.remove();
        }
    }
    _countLikes() {
        if (!this._like.classList.contains('card__like_active')) {
            this._handelCardLike(this._id);
        }
        else {
            this._handelCardDeleteLike(this._id);
        }
    }
    // проверка лайка пользователя
    _checkUserLike() {
        if (this._arrLikes.some((user) => {
            return this._currentUser === user._id
        })) {
            this._like.classList.add('card__like_active');
        }
    }
    getElement() {
        this._element = this._getElementFromTemplate();
        // переменные
        this._like = this._element.querySelector('.card__like');
        this._trash = this._element.querySelector('.card__trash');
        this._image = this._element.querySelector('.card__image');
        this._place = this._element.querySelector('.card__name');
        this._likeNumbers = this._element.querySelector('.card__numbers-like');
        // тут принимаем имена
        this._place.textContent = this._name;
        this._image.src = this._src;
        this._image.alt = this._name;
        this._likeNumbers.textContent = this._numbers;
        this._checkUserTrash();
        this._checkUserLike();
        this._addEventListeners();
        return this._element;
    }
}
export default Card;