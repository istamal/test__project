
import '../scss/style.scss';

let buttons = document.getElementsByClassName('text-block__button--raed-more');
let hiddens = document.getElementsByClassName('content_hidden');
let input = document.querySelector('.search-form__input');
let popupinput = document.querySelector('.popup__input');
let searchButton = document.querySelector('.search-form__button');
let popupsearchButton = document.querySelector('.popup__search-button');
let closeButton = document.querySelector('.side-bar__madal-close-button');
let modalCall = document.querySelector('.side-bar__modal--call');
let phone = document.querySelector('.contacts__phone');
let message = document.querySelector('.contacts__message');
let modalFeedback = document.querySelector('.side-bar__modal--feedback');
let feedbackCloseButton = document.querySelector('.side-bar__madal-feedback-close');
let burger = document.querySelector('.side-bar__burger-menu');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close-icon');

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
    popup.classList.add('show-modal');
});


popupClose.addEventListener('click', function() {
    popup.classList.remove('show-modal');
});


closeButton.addEventListener('click', function() {
    modalCall.classList.remove('show-modal');
});

phone.addEventListener('click', function() {
    modalCall.classList.add('show-modal');
});

message.addEventListener('click', function() {
    modalFeedback.classList.add('show-modal');
});

feedbackCloseButton.addEventListener('click', function() {
    modalFeedback.classList.remove('show-modal');
});

searchButton.addEventListener('click', function() {
    input.classList.toggle('show');
});

popupsearchButton.addEventListener('click', function() {
    popupinput.classList.toggle('show');
});


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        hiddens[i].classList.toggle('overflow');
    });
}