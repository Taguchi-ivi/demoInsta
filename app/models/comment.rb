# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  content    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  article_id :bigint           not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_comments_on_article_id  (article_id)
#  index_comments_on_user_id     (user_id)
#
class Comment < ApplicationRecord

    belongs_to :article
    belongs_to :user
    validates :content, presence: true

    after_create :send_email

    private 
        def send_email
            comment = self
            users = User.all
            users.each do |user|
                if self.content.include?("@#{user.account}")
                    # CommentMailer.new_comment(User.first, User.second, 3).deliver_now
                    # CommentMailer.new_comment(user, @comment.comment_id).deliver_later
                    CommentMailer.new_comment(user, comment).deliver_later
                end
            end
        end
end
