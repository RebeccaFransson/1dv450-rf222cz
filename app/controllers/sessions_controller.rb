class SessionsController < ApplicationController

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

end
