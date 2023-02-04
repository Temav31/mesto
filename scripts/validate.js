// для активации ошибки
const showInputError = (formElement, inputElement, errorMessage, form) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(form.errorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(form.inputErrorClass);
};
// если данные правильные
const hideInputError = (formElement, inputElement, form) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(form.errorClass);
    errorElement.classList.remove(form.inputErrorClass);
    errorElement.textContent = '';
};
// проверка на ошибки
const checkInputValidity = (formElement, inputElement, form) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, form);
    } else {
        hideInputError(formElement, inputElement, form);
    }
}
const setEventListeners = (formElement, buttonElement, form) => {
    const inputList = Array.from(formElement.querySelectorAll(form.inputSelector));
    // чтобы проверить состояние кнопки в самом начале
    toggleButtonState(inputList, buttonElement, form);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, form);
            // чтобы проверять его при изменении любого из полей
            toggleButtonState(inputList, buttonElement, form);
        });
    });;
};
const enableValidation = (form) => {
    const formList = Array.from(document.querySelectorAll(form.formSelector));
    formList.forEach((formElement) => {
        const buttonElement = formElement.querySelector(form.submitButtonSelector);
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
            disableButton(buttonElement, form);
        });
        setEventListeners(formElement, buttonElement, form);
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
function toggleButtonState(inputList, buttonElement, form) {
    if (hasInvalidInput(inputList)) {
        disableButton(buttonElement, form);
    } else {
        buttonElement.classList.remove(form.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}
function disableButton(buttonElement, form){
    buttonElement.classList.add(form.inactiveButtonClass);
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