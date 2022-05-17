class CommentMailer < ApplicationMailer
    
    # commentされた人(mailを送る先),commentした人
    # def new_comment(user, comment_user)
    # def new_comment(user, comment_id)
    def new_comment(user, comment)
        @user = user
        @comment = comment
        # @comment = Comment.find(comment_id)
        # @comment_user = comment.user

        # mail to: user.email ,subject: 'メールのタイトル'
        mail to: user.email ,subject: '【お知らせ】コメントが来ました'
    end
end