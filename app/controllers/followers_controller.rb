class FollowersController < ApplicationController

    def index
        user = User.find(params[:account_id])
        @user = user.followers
    end
end