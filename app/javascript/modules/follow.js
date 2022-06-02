import $ from 'jquery'
import axios from 'modules/axios'

const handleFollowDisplay = (hasFollowed) => {
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

const accountHasFollowGet = (userId) => {
    // debugger
    axios.get(`/accounts/${userId}/hasfollow`)
    .then((response) => {

        // debugger
        handleFollowDisplay(response.data.hasFollowed)
        countUpdate(response)
    })
    .catch((error) => {
        console.log(error)
        window.alert('失敗')
    })

}

const accountFollowingEvent = (userId) => {

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


}

const accountUnFollowingEvent = (userId) => {
    
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

}

// document.addEventListener('turbolinks:load', () => {

//     const dataset = $('#profile-show').data()
//     const userId = dataset.userId
//     const currentUserId = dataset.currentUserId
//     const hasFollowed = false

// })

export {
    // accountHasFollowGet: accountHasFollowGet,
    // accountFollowingEvent: accountFollowingEvent,
    // accountUnFollowingEvent: accountUnFollowingEvent
    accountHasFollowGet,
    accountFollowingEvent,
    accountUnFollowingEvent
}