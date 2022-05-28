class TimelinesController < ApplicationController

    before_action :authenticate_user!

    def show
        # @articles = Article.all

        user_ids = current_user.followings.pluck(:id)
        # @articles = Article.where(user_id: user_ids)
        now = Time.now
        from = Time.now - 24.hours
        @articles = Article
                        .where(user_id: user_ids,
                                updated_at: from..now)
                        .left_joins(:likes)
                        .group(:id)
                        .order('COUNT(likes.id) DESC',updated_at: :desc)
                        .limit(5)
    end
end


# 実行したSQL
# SELECT 
#     "articles".* 
#         FROM "articles" 
#         LEFT OUTER JOIN "likes" ON "likes"."article_id" = "articles"."id" 
#         WHERE "articles"."user_id" = $1 
#             AND "articles"."updated_at" 
#                 BETWEEN $2 AND $3 
#         GROUP BY "articles"."id" 
#         ORDER BY COUNT(likes.id) DESC, "articles"."updated_at" DESC 
#         LIMIT $4  
# [["user_id", 2],
# ["updated_at", "2022-05-27 14:44:00.646850"]
# ["updated_at", "2022-05-28 14:44:00.646848"]
# ["LIMIT", 5]]