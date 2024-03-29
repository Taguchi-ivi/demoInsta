import $ from 'jquery'
import axios from 'modules/axios'

const imageUpdate = (userId) => {

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
    
    
    debugger

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


export {
    imageUpdate
}