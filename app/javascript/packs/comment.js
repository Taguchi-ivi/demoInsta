
import $ from 'jquery'
import axios from 'modules/axios'

document.addEventListener('turbolinks:load', () => {

    // articleIdを取得
    const dataset = $('#comment-index').data()
    const articleId = dataset.articleId

    debugger
    axios.get(`/articles/${articleId}/comments`)
    .then((response) => {
        const comments = response.data
        // console.log(response.data)
        
        // debugger
        comments.forEach((comment) => {
            console.log(comment)
            // $('.comments-container').append(
            //     `<div class="article_comment"><p>${escape(comment.content)}</p></div>`
            // )
        })
    })
    .catch((error) => {
        console.log(error)
        // debugger
        window.alert('失敗')
    })
})