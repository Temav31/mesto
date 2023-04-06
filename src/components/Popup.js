class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._buttonClose = this._popup.querySelector('.popup__close');
    }
    _handleEscClose(evt) {
        evt.preventDefault();
        if (evt.key === 'Escape') {
            this.close();
        }
    }
    open() {
        this._popup.classList.add('popup_open');
        document.addEventListener('keyup', this._handleEscClose);
    }
    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close();
            }
        },
            this._buttonClose.addEventListener('click', () => {
                this.close();
            })
        );
    }
    close() {
        this._popup.classList.remove('popup_open');
        document.removeEventListener('keyup', this._handleEscClose);
    }
}
export default Popup;