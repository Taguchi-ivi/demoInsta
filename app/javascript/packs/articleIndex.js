// import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';
// import styles bundle
// import 'swiper/css/bundle';

import $ from 'jquery'
// import axios from 'axios' 
import axios from 'module/axios'

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

const handleHeartDisplay = (hasLiked) => {
    if (hasLiked) {
        $('.active-heart').removeClass('hidden')
    } else {
        $('.inactive-heart').removeClass('hidden')
    }
}

document.addEventListener('turbolinks:load', () => {
    // console.log('aaaaaaaa')
    myswiper();


    // const allDataset = $('#article-index').data()
    const allDataset = $('#article-index')

    // debugger
    allDataset.forEach(article => {
        const dataset = article.data()
        const articleId = dataset.articleId

        if(articleId) {
            // ここから明日考える
        }
    })

    // const dataset = $('#article-index').data()
    // const articleId = dataset.articleId
    axios.get(`/articles/${articleId}/like`)
    .then((response) => {
        // console.log(response)
        const hasLiked = response.data.hasLiked
        handleHeartDisplay(hasLiked)
    })


    // post
    $('.inactive-heart').on('click', () => {
        axios.post(`/articles/${articleId}/like`)
        .then((response) => {
            // console.log(response)
            if(response.data.status === 'ok') {
                $('.active-heart').removeClass('hidden')
                $('.inactive-heart').addClass('hidden')
            }
        })
        .catch((e) => {
            window.alert('ERROR')
            console.log(e)
        })
    })

    // delete
    $('.active-heart').on('click', () => {
        axios.delete(`/articles/${articleId}/like`)
        .then((response) => {
            // console.log(response)
            if(response.data.status === 'ok') {
                $('.active-heart').addClass('hidden')
                $('.inactive-heart').removeClass('hidden')
            }
        })
        .catch((e) => {
            window.alert('ERROR')
            console.log(e)
        })
    })



})

// document.addEventListener('DOMContentLoaded', () => {
//     // console.log('hello');
//     myswiper();
// })

