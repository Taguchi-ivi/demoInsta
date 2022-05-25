
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

    // 画像をupdateする
    imageUpdate(userId, currentUserId)

    // follow
    accountHasFollowGet(userId)
    accountFollowingEvent(userId)
    accountUnFollowingEvent(userId)

})