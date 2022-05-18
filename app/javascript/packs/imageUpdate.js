
import $ from 'jquery'
// import axios from 'axios'
import axios from 'modules/axios'


// document.addEventListener('DOMContentLoaded', () => {
document.addEventListener('turbolinks:load', () => {
    // window.alert('これでどうですか');
    // console.log('hello world!!');
    // debugger
    // $('.profile-avatar').on('click', (e) => {
    // $('#top-avatar-img').on('click', (e) => {
        // window.alert('CLICK');
        // var reader
        // reader = new FileReader(); 
        // reader.readAsDataURL(e.target.files[0]);
        // debugger
        // init();
        
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
        
        // 
        // IIFE - Immediately Invoked Function Expression
        // https://stackoverflow.com/questions/18307078/jquery-best-practises-in-case-of-document-ready
        // (
        
        // function (yourcode) {
        //     "use strict";
        //     // The global jQuery object is passed as a parameter
        //     yourcode(window.jQuery, window, document);
        // }(
        
        // function ($, window, document) {
        //     "use strict";
        //     // The $ is now locally scoped 
        //     $(function () {
        //         // The DOM is ready!
        //         init();
        //     });
        
        //     // The rest of your code goes here!
        // }));



        // axios.put('/profile')
        //     .then((response) => {
        //         console.log(response)
        //     })
    // })

    
})