class FormValidator {
    constructor(config, formElement) {
        // обработка входных данных
        this._formElement = formElement;
        this._inputSelector = config.inputSelector;
        this._formSelector = config.submitButtonSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        // поиск нужных элементов
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._formList = Array.from(this._formElement.querySelectorAll(this._formSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }
    // показывает ошибку инпута
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._errorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._inputErrorClass);
    };
    // данные коректны, убрать ошибку
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._errorClass);
        errorElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
    }
    // проверка на ошибки
    _checkInputValidity(inputElement) {
        // текст ошибки
        const errorMessage = inputElement.validationMessage;
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, errorMessage);
        } else {
            this._hideInputError(inputElement);
        }
        console.log('hi');
    }
    // слушатель при заполнении формы
    _setEventListeners() {
        // чтобы проверить состояние кнопки в самом начале
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                // чтобы проверять его при изменении любого из полей
                this._toggleButtonState();
            });
        });
    };
    // включает кнопку
    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableButton();
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
        }
    }
    // включает кнопку
    _disableButton() {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.setAttribute('disabled', 'disabled');
    }
    // возвращает ошибку
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }
    enableValidation() {
        this._formList.forEach(() => {
            this._formElement.addEventListener('submit', () => {
                this._disableButton();
            });
            this._setEventListeners();
        });
    }
}
export default FormValidator;