class UsersController < ApplicationController

  before_action :not_logged_in?, only: [:new, :create]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:userId] = @user.id
      redirect_to apps_path
    else
      render action: 'new'
    end
  end


  private
  def user_params#strong parameters
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end
