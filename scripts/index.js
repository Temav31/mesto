const aboutButton = document.querySelector('.profile__button-edit');
const aboutPopup = document.querySelector('.popup_about');
const aboutCloseButton = aboutPopup.querySelector('.popup__close');
const aboutAddButton = document.querySelector('.popup__button')
let mainForm = document.querySelector('form');
let nameInput = document.querySelector('.popup__input_text_name');
let workInput = document.querySelector('.popup__input_text_work');
let profileName = document.querySelector('.profile__info-name');
let profileWork = document.querySelector('.profile__info-work');
// нажатия кнопок
aboutButton.addEventListener('click', (event) => {
    //  для того чтобы не переходить по форме
    event.preventDefault();
    aboutPopup.classList.add('popup_open');
    nameInput.value = profileName.textContent;
    workInput.value = profileWork.textContent;
});
aboutCloseButton.addEventListener('click', (event) => {
    aboutPopup.classList.remove('popup_open');
});
aboutPopup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        aboutPopup.classList.remove('popup_open');
    }
});
aboutAddButton.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        aboutPopup.classList.remove('popup_open');
    }
});
// чтение из формы
function handleFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileWork.textContent = workInput.value;
}
mainForm.addEventListener('submit', handleFormSubmit);



