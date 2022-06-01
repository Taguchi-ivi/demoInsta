class ProfilesController < ApplicationController
    
    before_action :authenticate_user!
    # after_action :set_csrf_token_header
    skip_before_action :verify_authenticity_token
    

    def show
        @user = current_user
    end

    # def update
    #     @profile = current_user.prepare_profile
    #     @profile.assign_attributes(profile_params)
    #     if @profile.save
    #         remder json: profile, methods: [:avatar_url]
    #     else
    #         render json: profile.errors, status: 422
    #     end
    # end

    # registations_controllerで指定していたが処理後のpage設定がうまくいかないため、profiles_controllerで指定
    def update
        # binding.pry
        # @user = current_user
        # @user.assign_attributes()
        # if account_update_params[:avatar].present?
        # if params[:avatar].present?
        #     # current_user.avatar.attach(account_update_params[:avatar])
        #     # @user.avatar.attach(params[:avatar])
        #     current_user.avatar.attach(params[:avatar])
        #     # redirect_to profile_path, notice: 'プロフィールを更新'
        #     redirect_to profile_path
        # else
        #     # flash.now[:error] = '更新できませんでした'
        #     redirect_to profile_path
        # end

        if current_user.update_attributes(avatar_params)
            # render json: { a: 'aaaa'}
            render json: { status: 'ok'}
        else
            flash.now[:error] = '更新できませんでした'
            render :show
        end
    end

    # def create
    #     profile = Profile.new(profile_params)
    #     if profile.save
    #         # methodsによって画像のurlを返す
    #         remder json: profile, methods: [:avatar_url]
    #     else
    #         render json: profile.errors, status: 422
    #     end
    # end

    private

        # def account_update_params
        #     params.require(:profile).permit(
        #         # :nickname,
        #         # :introduction,
        #         # :gender,
        #         # :birthday,
        #         # :subscribed,
        #         :avatar
        #     )
        # end

        # def account_update_params
        #     params.require(:user).permit(
        #         :avatar
        #     )
        # end
        
        def avatar_params
            params.permit(:avatar)
        end
end