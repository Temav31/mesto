import Popup from "./Popup.js"
class PopupDelete extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popup = popupSelector;
        this._buttonRemove = this._popup.querySelector('.popup__button');
    }
    setEventListeners() {
        super.setEventListeners();
        this._buttonRemove.addEventListener('click', () => {
            this._removeCard();
            this.close();
        })
    }
    deleteCard(event) {
            this._removeCard = event;
    }
}
export default PopupDelete;