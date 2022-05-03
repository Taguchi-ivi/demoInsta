
import $ from 'jquery'

document.addEventListener('turbolinks:load', () => {
    
    const $text = $('.article-edit-form-text')
    const $button = $('.article-edit-wrapper-right-post')
    
    if ($text.val().length == 0) {
        $button.prop('disabled',true).addClass('disabled_class');
    }
    
    // debugger
    $text.on('change',function(){
        var thisValueLength = $(this).val().length;
        if(thisValueLength > 0){
            $button.prop('disabled',false).removeClass('disabled_class');
        }else{
            $button.prop('disabled',true).addClass('disabled_class');
        }
    });
    
})