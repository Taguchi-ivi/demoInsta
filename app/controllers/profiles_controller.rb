class ProfilesController < ApplicationController

    def show
        @profile = current_user.profile
    end

    private

        def profile_params
            params.require(:profile).permit(
                :nickname,
                :introduction,
                :gender,
                :birthday,
                :subscribed,
                :acatar
            )

        end
end