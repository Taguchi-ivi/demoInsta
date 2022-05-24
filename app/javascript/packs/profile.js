
import $ from 'jquery'
// import axios from 'axios'
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
document.addEventListener('turbolinks:load', () => {
        
        // userId取得、不要?
        const dataset = $('#profile-show').data()
        const userId = dataset.userId
        const currentUserId = dataset.currentUserId

        // axiosのレスポンスタイプを変更する
        const axiosInstance = axios.create({
            responseType: 'json',
            headers: {
                'Content-Type': 'image/png'
            }
        });

        // アクセスした時
        axiosInstance.get(`/profile`)
            .then( res => {
                // setImg(res.data.url);
                // avatar.setAttribute('src', res.data.url);
                // console.log('画像の読み込みに成功');
            })
            .catch( e => console.log('画像の読み込みに失敗'));
        

        // debugger
        if (userId === currentUserId) {

            // $("img[data-type=editable]").each(function (i, e) {
            $('#top-avatar-img').each(function (i, e) {
                var _inputFile = $('<input/>')
                    .attr('type', 'file')
                    .attr('hidden', 'hidden')
                    .attr('onchange', 'readImage()')
                    .attr('data-image-placeholder', e.id);
        
                $(e.parentElement).append(_inputFile);
        
                $(e).on("click", _inputFile, triggerClick);
            });
            
            
            function triggerClick(e) {
                e.data.click();
            }
            
            Element.prototype.readImage = function () {
                // debugger
                var _inputFile = this;
                if (_inputFile && _inputFile.files && _inputFile.files[0]) {
                    var _fileReader = new FileReader();
                    _fileReader.onload = function (e) {
                        var _imagePlaceholder = _inputFile.attributes.getNamedItem("data-image-placeholder").value;
                        var _img = $("#" + _imagePlaceholder);
                        _img.attr("src", e.target.result);
                        
                    };
                    _fileReader.readAsDataURL(_inputFile.files[0]);
                    // ここら辺にputアクションを
                    // debugger
                    // const avatarUser = {user: { avatar: _inputFile.files[0] }}
                    const file = _inputFile.files[0]
                    const data = new FormData();
                    data.append('avatar', file);
    
                    // debugger
                    // axios.put('/profile',{
                    //     user: { avatar: _inputFile.files[0] }
                    // })
                    // axios.put('/users', avatarUser )
                    // axios.put('/profile', avatarUser )
                    // axios.put('/profile', data )
                    axiosInstance.put('/profile', data )
                        .then((res) => {
                            console.log(res)
                        })
                        .catch((error) => {
                            // console.log(error)
                            // debugger
                            window.alert('失敗')
                            console.log(error.response)
                        })
                }
            };
        }
        

    // const dataset = $('#profile-show').data()
    // const userId = dataset.userId
    // const currentUserId = dataset.currentUserId
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

})