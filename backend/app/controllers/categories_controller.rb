class CategoriesController < ApplicationController
    before_action :authorized, except: [:index, :show]
    before_action :require_admin, except: [:index, :show]

    def show
      @category = Category.find(params[:id])
      render json: @category, status: 200
    end
    def index
      @categories = Category.all
      render json: @categories, status: 200
    end
    def create
      @category = Category.new(category_params)
      if @category.save
        render json: @category, status: 200
      else
        render json: {error: @category.errors.full_messages}, status: 400
      end
    end
    def update
      @category = Category.find(params[:id])
      if @category.update(category_params)
        render json: @category, status: 200
      else
        render json: {error: @category.errors.full_messages}, status: 400
      end
    end
  
    private
  
    def category_params
      params.permit(:name)
    end

    def require_admin
      if !@USER && @USER.admin?
        render json: {error: "Only admins can perform that action"}, status: 400
      end
    end
end
  