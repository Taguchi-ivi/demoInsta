import $ from 'jquery'
import axios from 'modules/axios'

const handleFollowDisplay = (hasFollowed) => {
    // setSelector = $(`[data-article-id=${articleNum}]`)
    // debugger
    if (hasFollowed) {
        $(`.profile-warapper-right-unfollow`).removeClass('hidden')
    } else {
        $(`.profile-warapper-right-follow`).removeClass('hidden')
    }


}

const countUpdate = (res) => {
    $('.profile-number-item.post').text(res.data.postCount)
    $('.profile-number-item.post').append(
        `<br><p>Posts</p>`
    )
    $('.profile-number-item-follower').text(res.data.followerCount)
    $('.profile-number-item-follower').append(
        `<br><p>Followers</p>`
    )
    $('.profile-number-item-following').text(res.data.followingCount)
    $('.profile-number-item-following').append(
        `<br><p>Following</p>`
    )
}

// document.addEventListener('DOMContentLoaded', () => {

    // const dataset = $('#profile-show').data()
    // const userId = dataset.userId
    // const currentUserId = dataset.currentUserId
    
    // // debugger
    // axios.get(`/accounts/${userId}/hasfollow`)
    // .then((response) => {

    //     // const hasLiked = response.data.hasLiked
    //     const hasFollowed = response.data.hasFollowed
    //     console.log(hasFollowed)
        
    //     // debugger
    //     handleFollowDisplay(hasFollowed)
    // })
    // .catch((error) => {
    //     console.log(error)
    //     window.alert('失敗')
    // })
// })


document.addEventListener('turbolinks:load', () => {

    const dataset = $('#profile-show').data()
    const userId = dataset.userId
    const currentUserId = dataset.currentUserId
    const hasFollowed = false
    
    // debugger
    axios.get(`/accounts/${userId}/hasfollow`)
    .then((response) => {

        // const hasLiked = response.data.hasLiked
        // console.log(response)
        // const hasFollowed = response.data.hasFollowed
        
        // debugger
        handleFollowDisplay(response.data.hasFollowed)
        countUpdate(response)
    })
    .catch((error) => {
        console.log(error)
        window.alert('失敗')
    })

    // フォローを解除する
    $(`.profile-warapper-right-unfollow`).on('click', () => {
        axios.post(`/accounts/${userId}/unfollows`)
            .then((response) => {
                // console.log(response)
                if(response.data.status === 'ok') {
                    $(`.profile-warapper-right-follow`).removeClass('hidden')
                    $(`.profile-warapper-right-unfollow`).addClass('hidden')
                    $('.profile-number-item-follower').text(response.data.followerCount)
                    $('.profile-number-item-follower').append(
                        `<br><p>Followers</p>`
                    )
                }
            })
            .catch((e) => {
                window.alert('ERROR')
                console.log(e)
            })
    })


    // フォローする
    $(`.profile-warapper-right-follow`).on('click', () => {
        axios.post(`/accounts/${userId}/follows`)
            .then((response) => {
                // console.log(response)
                if(response.data.status === 'ok') {
                    $(`.profile-warapper-right-follow`).addClass('hidden')
                    $(`.profile-warapper-right-unfollow`).removeClass('hidden')
                    $('.profile-number-item-follower').text(response.data.followerCount)
                    $('.profile-number-item-follower').append(
                        `<br><p>Followers</p>`
                    )
                }
            })
            .catch((e) => {
                window.alert('ERROR')
                console.log(e)
            })
    })


    // axios.get(`/accounts/${userId}/hasfollow`)
    // .then((response) => {

    //     // const hasLiked = response.data.hasLiked
    //     // console.log(response)
    //     // const hasFollowed = response.data.hasFollowed
        
    //     // debugger
    //     handleFollowDisplay(response.data.hasFollowed)
    //     countUpdate(response)
    // })
    // .catch((error) => {
    //     console.log(error)
    //     window.alert('失敗')
    // })

})