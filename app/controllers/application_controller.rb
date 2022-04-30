class ApplicationController < ActionController::Base
    include ActionController::RequestForgeryProtection
    protect_from_forgery with: :exception


    before_action :configure_permitted_parameters, if: :devise_controller?


    # private
    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [ :account])
        devise_parameter_sanitizer.permit(:account_update, keys: [ :avatar])
    end

    def after_sign_in_path_for(resource)
        mypage_root_path # ログイン後に遷移するpathを設定
    end
    
    def after_sign_out_path_for(resource)
        new_user_session_path # ログアウト後に遷移するpathを設定
    end

    def set_csrf_token_header
        response.set_header('X-CSRF-Token', form_authenticity_token)
    end
    
    #飛ばしたいpathはrake routesコマンドを打ちperfixを確認してください！
        
end
