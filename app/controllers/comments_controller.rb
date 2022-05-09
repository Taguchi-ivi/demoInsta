class CommentsController < ApplicationController
    before_action :authenticate_user!

    def index
        @article = Article.find(params[:article_id])
        # @comment = article.comments.build
        @comment = @article.comments
    end

    def new
        @article = Article.find(params[:article_id])
        # @comment = article.comments.build
        @comment = @article.comments
    end

    def create
        article = Article.find(params[:article_id])
        @comment = article.comments.build(comment_params)
        # ajax
        # @comment.save!
        # render json: @comment

        if @comment.save
            redirect_to article_comments_path(article), notice: 'コメントを追加'
        else
            flash.now[:error] = '更新できませんでした'
            render :new
        end
    end

    private
        def comment_params
            params.require(:comment).permit(:content)
        end
end