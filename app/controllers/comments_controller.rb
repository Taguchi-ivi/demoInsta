class CommentsController < ApplicationController
    before_action :authenticate_user!, only: [:create]

    def index
        # @comment = @article.comments
        # @comment = @article.comments.build
        @article = Article.find(params[:article_id])
        @comment = @article.comments
        # render json: comment
        # render json: comment, include: [:user]
    end

    # json用
    def new
        # @article = Article.find(params[:article_id])
        # @comment = article.comments.build
        # @comment = @article.comments
        article = Article.find(params[:article_id])
        comment = article.comments
        render json: comment, include: [:user]

    end

    def create
        # article = Article.find(params[:article_id])
        # @comment = article.comments.build(comment_params)

        # @article = Article.find(params[:article_id])
        # @comment = current_user.comments.build(comment_params)
        
        # ajax
        # comment = article.comments.build(comment_params)
        comment = current_user.comments.build(comment_params)
        @comment = current_user.comments.build(comment_params)
        comment.save!
        render json: comment, include: [:user]

        # if @comment.save
        #     redirect_to article_comments_path(article), notice: 'コメントを追加'
        # else
        #     flash.now[:error] = '更新できませんでした'
        #     render :index
        # end
    end

    private
        def comment_params
            # params.require(:comment).permit(:content)
            params.require(:comment).permit(:content, :article_id)
        end
end