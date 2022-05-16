class CommentMailer < ApplicationMailer
    
    # commentされた人(mailを送る先),commentした人
    # def new_comment(user, comment_user)
    def new_comment(user, comment_user, article_id)
        @user = user
        @comment_user = comment_user
        # article = Article.find(params[:article_id])
        # @comment = article.comments

        article = Article.find(article_id)
        @comment = article.comments

        # mail to: user.email ,subject: 'メールのタイトル'
        mail to: user.email ,subject: '【お知らせ】コメントが来ました'
    end
end