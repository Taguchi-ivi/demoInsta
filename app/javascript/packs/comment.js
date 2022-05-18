
import $ from 'jquery'
import axios from 'modules/axios'

// avatarが存在しない場合のpathを指定 全て不要に=> serializer記述
const avatarImg = (imgName) => {
    let newImgPath; 
    if (typeof imgName === 'undefined') {
        newImgPath = "/assets/def-avatar.png" 
    }else {
        newImgPath = imgName
    }
    return newImgPath
}

const addComment = (commentItem) => {
    $('.comment').append(
        `<div class="comment-item">
            <div class="comment-item-wrapper">
                <div class="comment-item-left">
                    <a href="/accounts/${commentItem.user.id}">
                        <img src=${commentItem.user.avatar_url} >
                    </a>
                </div>
                <div class="comment-item-right">
                    <div class="comment-item-right-name">
                        ${commentItem.user.account}
                    </div>
                    <div class="comment-item-right-content">
                        ${commentItem.content}
                    </div>
                </div>
            </div>
        </div>`
    )
}

document.addEventListener('turbolinks:load', () => {
// document.addEventListener('DOMContentLoaded', () => {

    // articleIdを取得
    const dataset = $('#comment-index').data()
    const articleId = dataset.articleId
    // const userId = dataset.userId

    // debugger
    axios.get(`/articles/${articleId}/comments/new`)
    .then((response) => {
        const comments = response.data
        // console.log(response.data)
        
        // debugger
        comments.forEach((comment) => {
            addComment(comment)
        })
    })
    .catch((error) => {
        console.log(error)
        // debugger
        window.alert('失敗')
    })

    // comment作成
    $('.comment-form-box-left').on('click', () => {
        // window.alert('ok google')
        const content = $('.comment-content').val()
        // debugger
        if (!content) {
            window.alert('コメントを入力してください')
        } else {
            // axios.post(`/articles/${articleId}/comments`, {
            axios.post(`/articles/${articleId}/comments`, {
                comment: {
                    article_id: articleId,
                    content: content
                }
            })
            .then((res) => {
                const comment = res.data
                // console.log(comment)
                addComment(comment)
                $('.comment-content').val('')
            })
            .catch((error) => {
                console.log(error)
                // debugger
                window.alert('失敗')
            })
        }
    })
})