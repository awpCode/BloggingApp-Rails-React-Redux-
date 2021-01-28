class UsersController < ApplicationController
    before_action :authorized, only: [:update, :destroy, :auto_login]  
    
    before_action :set_user, only: [:show,:update,:destroy]
    
    before_action :require_same_user ,only: [:update,:destroy]

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
      @user = User.create(user_params)
      if @user.valid?
        token = encode_token({user_id: @user.id})
        render json: {user: @user, token: token}, status: 200
      else
        render json: {error: "Invalid username or password"}, status: 400
      end
    end

    def destroy
        @user.destroy
        render json: {message: "User successfully deleted."}, status: 200
    end

    def login
      @user = User.find_by(username: params[:username])

      if @user && @user.authenticate(params[:password])
        token = encode_token({user_id: @user.id})
        render json: {user: @user, token: token}, status: 200
      else
        render json: {error: "Invalid username or password"}, status: 400
      end
    end


    def auto_login
      render json: @USER, status: 200
    end


    private
    def user_params
      params.permit(:username,:email,:password)
    end
    def set_user
      @user = User.find(params[:id])
    end
   def require_same_user
      if @USER != @user && !@USER.admin?
        render json: {error: "You can only edit or delete your own account"}, status: 400
      end
   end
end
  