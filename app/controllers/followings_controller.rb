class FollowingsController < ApplicationController

    def index
        user = User.find(params[:account_id])
        @user = user.followings
    end
end