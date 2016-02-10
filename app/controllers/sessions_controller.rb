class SessionsController < ApplicationController

  before_action :not_logged_in?

  def login
    user = User.find_by_email(params[:session][:email])
    if user && user.authenticate(params[:session][:password])
      session[:userId] = user.id
      redirect_to apikeys_path
    else
      flash.now[:error] = "Invalid email/password combination"
      render action: 'new'
    end
  end

  def logout
    session[:userId] = nil
    redirect_to root_path, :error => "logged out"
  end

  private
  def not_logged_in?
    if !current_user.nil?
      redirect_to apikeys_path
    end
  end
end
