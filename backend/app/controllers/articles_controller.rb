class ArticlesController < ApplicationController

    before_action :authorized, only: [:create, :update, :destroy]
    before_action :set_article, only: [:show, :update, :destroy]
    before_action :require_same_user, only: [:update, :destroy]
    
    def show
        render json: @article, status: 200
    end
    def index
        @article = Article.all
        render json: @article, status: 200
    end

    def create
      @article = Article.new(article_params)
      @article.user = @USER
      if @article.save
        render json: @article, status: 200
      else
        render json: {error: @article.errors.full_messages}, status: 400
      end
    end

    def update
     if @article.update(article_params)
        render json: @article, status: 200
     else
        render json: {error: @article.errors.full_messages}, status: 400
     end
    end

    def destroy
      @article.destroy
      render json: {message: "Article successfully deleted."}, status: 200
    end
  
  
    private
    def set_article
      @article = Article.find(params[:id])
    end
    def article_params
      params.permit(:title,:description, category_ids: [])
    end

    def require_same_user
      if @USER != @article.user && !@USER.admin?
        render json: {error: "You can only edit or delete your own articles"}, status: 400
      end
    end

end