// import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';
// import styles bundle
// import 'swiper/css/bundle';


// init Swiper:
const myswiper = new Swiper(".swiper", {
    // effect: 'coverflow',
    // ページネーションが必要なら追加
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true
    },
    // ナビボタンが必要なら追加
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    slidesPerView: 2,

    scrollbar: {
        el: '.swiper-scrollbar',
    }
});

// document.addEventListener('turbolinks:load', () => {
//     console.log('aaaaaaaa')
//     swiper();
// })

document.addEventListener('DOMContentLoaded', () => {
    console.log('hello');
    myswiper();
})

