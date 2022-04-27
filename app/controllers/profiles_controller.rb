class ProfilesController < ApplicationController
    before_action :authenticate_user!

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

    def update
        if account_update_params[:avatar].present?
            current_user.avatar.attach(account_update_params[:avatar])
            redirect_to profile_path
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

        def account_update_params
            params.require(:profile).permit(
                # :nickname,
                # :introduction,
                # :gender,
                # :birthday,
                # :subscribed,
                :avatar
            )

        end
end