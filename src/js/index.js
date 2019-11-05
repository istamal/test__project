
import '../scss/style.scss';

let buttons = document.getElementsByClassName('read-more');
let hiddens = document.getElementsByClassName('content_hidden');
let input = document.querySelector('.search-form__input');
let popupinput = document.querySelector('.popup__input');
let searchButton = document.querySelector('.search-form__button--open');
let popupsearchButton = document.querySelector('.popup__search-form-button--open');
let closeButton = document.querySelector('.calls-close-button');
let modalCall = document.querySelector('.side-bar__modal--call');
let phone = document.querySelectorAll('.contacts__phone');
let message = document.querySelectorAll('.contacts__message');
let modalFeedback = document.querySelector('.side-bar__modal--feedback');
let feedbackCloseButton = document.querySelector('.feedback-close-button');
let burger = document.querySelector('.side-bar__burger-menu');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.close-button');
let wrapper = document.querySelector('.wrapper');

if(window.matchMedia('(max-width: 480px)').matches){
    for (let i = 0; i < hiddens.length; i++ ) {
        hiddens[i].classList.remove('brands__grid', 'technics__grid', 'price__menu');
    }

    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 32,
        slidesPerView: 4,
        dynamicMainBullets: 1,
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 16,
                },
            420: {
                slidesPerView: 1.5
            }
        },
        pagination: {
            el: '.swiper-pagination',
            },
    });
}



burger.addEventListener('click', function() {
    popup.classList.add('popup-show');
    wrapper.classList.add('screen-height');
});


popupClose.addEventListener('click', function() {
    popup.classList.remove('popup-show');
});

function closeModal(button, modal) {
    button.addEventListener('click', function() {
        modal.classList.remove('show-modal');
    });
}

closeModal(closeButton, modalCall);
closeModal(feedbackCloseButton, modalFeedback);

function openModal(arr, modal) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener('click', function() {
            popup.classList.remove('popup-show');
            modal.classList.add('show-modal');
            wrapper.classList.add('screen-height');
        });
    }
}

openModal(phone, modalCall);
openModal(message, modalFeedback);

searchButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    input.classList.toggle('show');
});

popupsearchButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    popupinput.classList.toggle('show');
});

function showHidden(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        arr1[i].addEventListener('click', function() {
            arr2[i].classList.toggle('overflow');
        });
    }
}

showHidden(buttons, hiddens);
