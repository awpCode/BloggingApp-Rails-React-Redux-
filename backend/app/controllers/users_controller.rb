class UsersController < ApplicationController
    before_action :set_user, only: [:show,:edit,:update, :destroy]

    #before_action :require_user,only: [:edit,:update]
    #before_action :require_same_user ,only: [:edit,:update,:destroy]

    def show
        render json: @user, status: 200
    end

    def index
        @users = User.all
        render json: @users, status: 200
    end

    def update
      if @user.update(user_params)
        render json: @user, status: 200
      else
        render json: {error: @user.errors.full_messages}, status: 400
      end
    end
    def create
      @user = User.new(user_params)
      if @user.save
        render json: @user, status: 200
      else
        render json: {error: @user.errors.full_messages}, status: 400
      end
    end
    def destroy
        @user.destroy
        render json: {message: "User successfully deleted."}, status: 200
    end
    private
    def user_params
      params.permit(:username,:email,:password_digest)
    end
    def set_user
      @user = User.find(params[:id])
    end
   # def require_same_user
   #   if current_user != @user && !current_user.admin?
   #     flash[:alert]="You can only edit or delete your own account"
   #     redirect_to @user
   #   end
   # end
end
  