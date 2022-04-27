
import $ from 'jquery'
import axios from 'axios'

// document.addEventListener('turbolinks:load', () => {
document.addEventListener('DOMContentLoaded', () => {
    // window.alert('これでどうですか');
    // console.log('hello world!!');
    // debugger
    $('.profile-avatar').on('click', (e) => {
        window.alert('CLICK');
        var reader
        reader = new FileReader(); 
        reader.readAsDataURL(e.target.files[0]);
        // axios.put('/profile')
        //     .then((response) => {
        //         console.log(response)
        //     })
    })

    
})