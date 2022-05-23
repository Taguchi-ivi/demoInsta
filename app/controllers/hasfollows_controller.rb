class HasfollowsController < ApplicationController

    # ajax用 follow関係を確認する
    def show
        user = User.find(params[:account_id])
        follow_status = current_user.has_followed?(user)
        post_count = user.articles.count
        follower_count = user.followers.count
        following_count = user.followings.count
        render json: { hasFollowed: follow_status,
                        postCount: post_count,
                        followerCount: follower_count,
                        followingCount: following_count
        }
    end
end