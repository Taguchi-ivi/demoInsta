class ArticlesController < ApplicationController
    before_action :authenticate_user!

    def index

    end

    def new
    end
    

    def create
    end

    
    private
        def article_params
            params.require(:article).permit(
                :content,
                images: []
            )
        end

end