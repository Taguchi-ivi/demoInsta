
import $ from 'jquery'
// import axios from 'axios'
import axios from 'modules/axios'

import { imageUpdate } from 'modules/imageUpdate'

import { 
    accountHasFollowGet,
    accountFollowingEvent,
    accountUnFollowingEvent
} from 'modules/follow'

// document.addEventListener('DOMContentLoaded', () => {
document.addEventListener('turbolinks:load', () => {
    
    const dataset = $('#profile-show').data()
    const userId = dataset.userId
    const currentUserId = dataset.currentUserId
    

    // let currentUserId
    // axios.get(`/accounts/${userId}/edit`)
    // .then((response) => {
    //     // console.log(response)
    //     currentUserId = response.data.currentUserId
    // })
    // .catch((e) => {
    //     window.alert('ERROR')
    //     console.log(e)
    // })

    

    // current_userが存在したら実行する
    // debugger
    if (currentUserId) {

        if (userId === currentUserId) {
            // 画像をupdateする
            imageUpdate(userId)
        }

        // follow
        accountHasFollowGet(userId)
        accountFollowingEvent(userId)
        accountUnFollowingEvent(userId)

    }

})