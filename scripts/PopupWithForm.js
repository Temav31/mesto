import Popup from "./Popup.js"
class PopupWithForm extends Popup {
    constructor({popupSelector, submitForm}) {
        super( popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._input = this._form.querySelectorAll('.popup__input');

    }
    _getInputValues() {
            this._inputList =  {};
            this._input.forEach(input =>{
                this._inputList[input.name] = input.value;
            })
        return this._inputList;
    }
    close() {
        super.close();
        this._form.reset();
    }
    setEventListeners() {
        super.setEventListeners();
            this._form.addEventListener('submit', (event) =>{
            event.preventDefault();
            this._submitForm(this._getInputValues());
            this.close();
        });
    }
}
export default PopupWithForm;
