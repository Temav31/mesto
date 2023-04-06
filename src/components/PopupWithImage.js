import Popup from "./Popup.js"
class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector('.popup__image-image');
        this._text = this._popup.querySelector('.popup__text-image');
    }
    open(items) {
        super.open();
        this._text.textContent = items.name;
        this._image.src = items.link;
        this._image.alt = items.name;
    }
}
export default PopupWithImage; 