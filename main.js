(()=>{"use strict";var e={};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}e.p="";var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._inputSelector=t.inputSelector,this._formSelector=t.submitButtonSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._errorClass),n.textContent=t,n.classList.add(this._inputErrorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._errorClass),t.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){var t=e.validationMessage;e.validity.valid?this._hideInputError(e):this._showInputError(e,t)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"enableValidation",value:function(){var e=this;this._formElement.addEventListener("submit",(function(){e._disableButton()})),this._setEventListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();const o=r;function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a(r.key),r)}}function a(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===i(t)?t:String(t)}var c=function(){function e(t,n,r){var o,i,u,c=this,l=r.items,s=r.handleCardClick,f=r.handelCardDelete,p=r.handelCardLike,y=r.handelCardDeleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,u=function(){c._element.remove(),c._element=null},(i=a(i="deleteCard"))in o?Object.defineProperty(o,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[i]=u,this._template=t,this._currentUser=n,this._name=l.name,this._src=l.link,this._items=l,this._handleCardClick=s,this._handelCardDelete=f,this._handelCardDeleteLike=y,this._handelCardLike=p,this._arrLikes=l.likes,this._numbers=l.likes.length,this._isOwner=l.owner._id===n,this._id=l._id,this._countLikes=this._countLikes.bind(this)}var t,n;return t=e,(n=[{key:"getApiId",value:function(){return this._id}},{key:"_getElementFromTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".card").cloneNode(!0)}},{key:"_addEventListeners",value:function(){var e=this;this._trash.addEventListener("click",this._handelCardDelete),this._like.addEventListener("click",this._countLikes),this._image.addEventListener("click",(function(){e._handleCardClick(e._name,e._src)}))}},{key:"likeCard",value:function(e){this._arrLikes=e.likes,this._numbers=e.likes.length,this._like.classList.toggle("card__like_active"),this._likeNumbers.textContent=this._numbers}},{key:"_checkUserTrash",value:function(){this._isOwner||this._trash.remove()}},{key:"_countLikes",value:function(){this._like.classList.contains("card__like_active")?this._handelCardDeleteLike(this._id):this._handelCardLike(this._id)}},{key:"_checkUserLike",value:function(){var e=this;this._arrLikes.some((function(t){return e._currentUser===t._id}))&&this._like.classList.add("card__like_active")}},{key:"getElement",value:function(){return this._element=this._getElementFromTemplate(),this._like=this._element.querySelector(".card__like"),this._trash=this._element.querySelector(".card__trash"),this._image=this._element.querySelector(".card__image"),this._place=this._element.querySelector(".card__name"),this._likeNumbers=this._element.querySelector(".card__numbers-like"),this._place.textContent=this._name,this._image.src=this._src,this._image.alt=this._name,this._likeNumbers.textContent=this._numbers,this._checkUserTrash(),this._checkUserLike(),this._addEventListeners(),this._element}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const l=c;function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._about=n,this._image=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,avatar:this._image.src}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;this._name.textContent=t,this._about.textContent=n,this._image.src=r}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const y=p;function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}const m=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItem",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}const _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this),this._buttonClose=this._popup.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){e.preventDefault(),"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_open"),document.addEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target===t.currentTarget&&e.close()}),this._buttonClose.addEventListener("click",(function(){e.close()})))}},{key:"close",value:function(){this._popup.classList.remove("popup_open"),document.removeEventListener("keyup",this._handleEscClose)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}const P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector,r=e.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._submitForm=r,t._button=t._popup.querySelector(".popup__button"),t._form=t._popup.querySelector(".popup__form"),t._input=t._form.querySelectorAll(".popup__input"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList={},this._input.forEach((function(t){e._inputList[t.name]=t.value})),this._inputList}},{key:"close",value:function(){k(E(u.prototype),"close",this).call(this),this._form.reset()}},{key:"update",value:function(e){this._button.textContent=e?"Сохранение...":"Сохранение"}},{key:"setEventListeners",value:function(){var e=this;k(E(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}const q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image-image"),t._text=t._popup.querySelector(".popup__text-image"),t}return t=u,(n=[{key:"open",value:function(e){O(T(u.prototype),"open",this).call(this),this._text.textContent=e.name,this._image.src=e.link,this._image.alt=e.name}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}const A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popup=e,t._buttonRemove=t._popup.querySelector(".popup__button"),t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;R(D(u.prototype),"setEventListeners",this).call(this),this._buttonRemove.addEventListener("click",(function(){e._removeCard()}))}},{key:"deleteCard",value:function(e){this._removeCard=e}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==U(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}const H=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._basePath=t,this._token=n}var t,n;return t=e,(n=[{key:"_getHeaders",value:function(){return{authorization:this._token,"Content-Type":"application/json"}}},{key:"_getJson",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getProfile",value:function(){return fetch("".concat(this._basePath,"/users/me"),{headers:this._getHeaders()}).then(this._getJson)}},{key:"editProfile",value:function(e){return fetch("".concat(this._basePath,"/users/me"),{method:"PATCH",headers:this._getHeaders(),body:JSON.stringify(e)}).then(this._getJson)}},{key:"editProfileImage",value:function(e){return fetch("".concat(this._basePath,"/users/me/avatar"),{method:"PATCH",headers:this._getHeaders(),body:JSON.stringify(e)}).then(this._getJson)}},{key:"getCard",value:function(){return fetch("".concat(this._basePath,"/cards"),{headers:this._getHeaders()}).then(this._getJson)}},{key:"addCard",value:function(e){return fetch("".concat(this._basePath,"/cards"),{method:"POST",headers:this._getHeaders(),body:JSON.stringify(e)}).then(this._getJson)}},{key:"removeCard",value:function(e){return fetch("".concat(this._basePath,"/cards/").concat(e),{method:"DELETE",headers:this._getHeaders()}).then(this._getJson)}},{key:"likeCard",value:function(e){return fetch("".concat(this._basePath,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._getHeaders()}).then(this._getJson)}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._basePath,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._getHeaders()}).then(this._getJson)}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();e.p,e.p,e.p;var F=document.querySelector(".profile__button-edit"),V=document.querySelector(".popup_type_about"),N=document.querySelector(".popup__input_text_name"),z=document.querySelector(".popup__input_text_work"),M=document.querySelector(".profile__info-name"),$=document.querySelector(".profile__info-work"),G=document.querySelector(".profile__avatar-image"),K=document.querySelector(".profile__button-add"),Q=document.querySelector(".popup_type_place"),W=document.querySelector(".popup_type_image"),X=document.querySelector(".popup_type_delete"),Y=document.querySelector(".popup_type_profile"),Z=(document.querySelector(".profile__avatar-image"),document.querySelector(".profile__button")),ee={selectorTemplatePlace:".card-template"},te={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__error-text",errorClass:"popup__error"};function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var re=document.querySelector(".popup__form-about"),oe=document.querySelector(".popup__form-place");new o(te,re).enableValidation(),new o(te,oe).enableValidation(),new o(te,document.querySelector(".popup_type_profile")).enableValidation();var ie,ue=new H("https://mesto.nomoreparties.co/v1/cohort-62","1a6e0a32-00a7-4ba0-818b-d0147d70095f");Promise.all([ue.getCard(),ue.getProfile()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ne(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ie=i._id,pe.renderItem(o)})).catch((function(e){console.log(e)}));var ae=new y(M,$,G);ue.getProfile().then((function(e){ae.setUserInfo({name:e.name,about:e.about,avatar:e.avatar})})).catch((function(e){console.log(e)}));var ce=new P({popupSelector:V,submitForm:function(e){ce.update(!0),ue.editProfile(e).then((function(e){ae.setUserInfo({name:e.name,about:e.about,avatar:e.avatar}),ce.close()})).catch((function(e){console.log(e)})).finally((function(){ce.update(!1)}))}});ce.setEventListeners(),F.addEventListener("click",(function(e){e.preventDefault();var t,n,r,o=ae.getUserInfo();n=(t={name:o.name,about:o.about}).name,r=t.about,N.value=n,z.value=r,ce.open()}));var le=new q(W);le.setEventListeners();var se=new A(X);function fe(e){var t=new l(ee.selectorTemplatePlace,ie,{items:e,handleCardClick:function(e,t){le.open({name:e,link:t})},handelCardDelete:function(){se.open(),se.deleteCard((function(){ue.removeCard(t.getApiId()).then((function(){t.deleteCard(),se.close()})).catch((function(e){console.log(e)}))}))},handelCardLike:function(e){ue.likeCard(e).then((function(e){t.likeCard(e)})).catch((function(e){console.log(e)}))},handelCardDeleteLike:function(e){ue.deleteLikeCard(e).then((function(e){t.likeCard(e)})).catch((function(e){console.log(e)}))}});return t.getElement()}se.setEventListeners();var pe=new m({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){pe.addItem(fe(e))}},".group"),ye=new P({popupSelector:Q,submitForm:function(e){ye.update(!0),ue.addCard(e).then((function(e){pe.addItem(fe(e)),ye.close()})).catch((function(e){console.log(e)})).finally((function(){ye.update(!1)}))}});K.addEventListener("click",(function(e){e.preventDefault(),ye.open()})),ye.setEventListeners();var he=new P({popupSelector:Y,submitForm:function(e){he.update(!0),ue.editProfileImage(e).then((function(e){ae.setUserInfo({name:e.name,about:e.about,avatar:e.avatar}),he.close()})).catch((function(e){console.log(e)})).finally((function(){he.update(!1)}))}});Z.addEventListener("click",(function(e){e.preventDefault(),he.open()})),he.setEventListeners()})();