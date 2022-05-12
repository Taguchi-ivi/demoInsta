// import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';
// import styles bundle
// import 'swiper/css/bundle';

import $ from 'jquery'
// import axios from 'axios' 
import axios from 'modules/axios'

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

const handleHeartDisplay = (hasLiked, articleNum) => {
    // setSelector = $(`[data-article-id=${articleNum}]`)
    // debugger
    if (hasLiked) {
        $(`[data-article-id="${articleNum}"] .active-heart`).removeClass('hidden')
    } else {
        $(`[data-article-id="${articleNum}"] .inactive-heart`).removeClass('hidden')
    }
}

// document.addEventListener('DOMContentLoaded', () => {
document.addEventListener('turbolinks:load', () => {
    // console.log('aaaaaaaa')
    // myswiper();
    myswiper


    // const allDataset = $('#article-index').data()
    // const allData = $('#article-index')

    // debugger
    // allData.forEach(article => {
    //     const dataset = article.data()
    //     const articleId = dataset.articleId

    //     if(articleId) {
    //         // ここから明日考える
    //         // const dataset = $('#article-index').data()
    //         // const articleId = dataset.articleId
    //         axios.get(`/articles/${articleId}/like`)
    //         .then((response) => {
    //             // console.log(response)
    //             const hasLiked = response.data.hasLiked
    //             handleHeartDisplay(hasLiked)
    //         })
    //     }
    // })

    $('.article-item').each(function(i , articleItem ) {
        // 引数1;index番号 , 引数2;要素
        // console.log('インデックス番号' + i + 'テキスト' + $(o).text());
        // debugger
        const articleNum = $(articleItem).data().articleId

        if(articleNum) {
            axios.get(`/articles/${articleNum}/like`)
            .then((response) => {
                // console.log(response)
                const hasLiked = response.data.hasLiked
                handleHeartDisplay(hasLiked, articleNum)
            })
            .catch((e) => {
                console.log(e);
            })

            // post
            $(`[data-article-id="${articleNum}"] .inactive-heart`).on('click', () => {
                // debugger
                axios.post(`/articles/${articleNum}/like`)
                .then((response) => {
                    // console.log(response)
                    if(response.data.status === 'ok') {
                        $(`[data-article-id="${articleNum}"] .active-heart`).removeClass('hidden')
                        $(`[data-article-id="${articleNum}"] .inactive-heart`).addClass('hidden')
                    }
                })
                .catch((e) => {
                    window.alert('ERROR')
                    console.log(e)
                })
            })

            // delete
            $(`[data-article-id="${articleNum}"] .active-heart`).on('click', () => {
                // debugger
                axios.delete(`/articles/${articleNum}/like`)
                .then((response) => {
                    // console.log(response)
                    if(response.data.status === 'ok') {
                        $(`[data-article-id="${articleNum}"] .active-heart`).addClass('hidden')
                        $(`[data-article-id="${articleNum}"] .inactive-heart`).removeClass('hidden')
                    }
                })
                .catch((e) => {
                    window.alert('ERROR')
                    console.log(e)
                })
            })

        }
    })



    // post
    // $('.inactive-heart').on('click', () => {
    //     axios.post(`/articles/${articleId}/like`)
    //     .then((response) => {
    //         // console.log(response)
    //         if(response.data.status === 'ok') {
    //             $('.active-heart').removeClass('hidden')
    //             $('.inactive-heart').addClass('hidden')
    //         }
    //     })
    //     .catch((e) => {
    //         window.alert('ERROR')
    //         console.log(e)
    //     })
    // })
    
    // $('.inactive-heart').on('click', () => {
    //     debugger
    //     const parentName = $('.inactive-heart').parent().parent().parent()
    //     const articleNum = 1
    //     // console.log($(this).closest('.article-item'))
    //     const kore = $(this).closest('.article-item')
    //     // axios.post(`/articles/${articleNum}/like`)
    //     // .then((response) => {
    //     //     // console.log(response)
    //     //     if(response.data.status === 'ok') {
    //     //         $(`[data-article-id="${articleNum}"] .active-heart`).removeClass('hidden')
    //     //         $(`[data-article-id="${articleNum}"] .inactive-heart`).addClass('hidden')
    //     //     }
    //     // })
    //     // .catch((e) => {
    //     //     window.alert('ERROR')
    //     //     console.log(e)
    //     // })
    // })

    // // delete
    // $('.active-heart').on('click', () => {
    //     axios.delete(`/articles/${articleId}/like`)
    //     .then((response) => {
    //         // console.log(response)
    //         if(response.data.status === 'ok') {
    //             $('.active-heart').addClass('hidden')
    //             $('.inactive-heart').removeClass('hidden')
    //         }
    //     })
    //     .catch((e) => {
    //         window.alert('ERROR')
    //         console.log(e)
    //     })
    // })
    // $('.active-heart').on('click', () => {
    //     axios.delete(`/articles/${articleId}/like`)
    //     .then((response) => {
    //         // console.log(response)
    //         if(response.data.status === 'ok') {
    //             $(`[data-article-id="${articleNum}"] .active-heart`).addClass('hidden')
    //             $(`[data-article-id="${articleNum}"] .inactive-heart`).removeClass('hidden')
    //         }
    //     })
    //     .catch((e) => {
    //         window.alert('ERROR')
    //         console.log(e)
    //     })
    // })



})

// document.addEventListener('DOMContentLoaded', () => {
//     // console.log('hello');
//     myswiper();
// })

