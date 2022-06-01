class AccountsController < ApplicationController
    # before_action :authenticate_user!

    def show
        @user = User.find(params[:id])
        if @user == current_user
            redirect_to profile_path
        end
    end

    # ajax用
    def edit
        # current_userが存在した場合、idを返す
        if current_user.present?
            render json: { currentUserId: current_user.id}
        else
            render json: { currentUserId: 0}
        end
    end

end