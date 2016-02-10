class SessionsController < ApplicationController

  before_action :not_logged_in?, only: [:new]

  def new

  end

  def create
    user = User.find_by_email(params[:session][:email])
    if user && user.authenticate(params[:session][:password])
      session[:userId] = user.id
      redirect_to apikeys_path
    else
      flash.now[:error] = "Invalid email/password combination"
      render action: 'new'
    end
  end




end
