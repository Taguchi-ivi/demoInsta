class FollowsController < ApplicationController

    before_action :authenticate_user!

    def create
        current_user.follow!(params[:account_id])
        user = User.find(params[:account_id])
        follower_count = user.followers.count

        # redirect_to account_path(params[:account_id])
        render json: { status: 'ok', followerCount: follower_count }
    end
end