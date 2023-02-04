// для активации ошибки
const showInputError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.errorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.inputErrorClass);
};
// если данные правильные
const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.errorClass);
    errorElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
};
// проверка на ошибки
const checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
        hideInputError(formElement, inputElement, config);
    }
}
const setEventListeners = (formElement, buttonElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    // чтобы проверить состояние кнопки в самом начале
    toggleButtonState(inputList, buttonElement, config);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, config);
            // чтобы проверять его при изменении любого из полей
            toggleButtonState(inputList, buttonElement, config);
        });
    });;
};
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        const buttonElement = formElement.querySelector(config.submitButtonSelector);
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
            disableButton(buttonElement, config);
        });
        setEventListeners(formElement, buttonElement, config);
    });
};
// возвращает ошибку
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}
// актиная или нет кнопка
// enableValidation();
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}
function toggleButtonState(inputList, buttonElement, config) {
    if (hasInvalidInput(inputList)) {
        disableButton(buttonElement, config);
    } else {
        buttonElement.classList.remove(config.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}
function disableButton(buttonElement, config){
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
}
// все настройки передаются при вызове
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__error-text',
    errorClass: 'popup__error'
});