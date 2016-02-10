class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception

  private
  helper_method :current_user

  def current_user#om instansen inte är satt körs korden bakom ||
    @current ||= User.find(session[:userId]) if session[:userId]
  end

  def is_logged_in?
    if current_user.nil? then
      redirect_to root_path
    end
  end

  def isAdmin?
    unless current_user.isAdmin?
      if current_user.nil?
        redirect_to root_path
      else
        redirect_to apikeys_path
      end
    end
  end

  def not_logged_in?
    if !current_user.nil?
      redirect_to apikeys_path
    end
  end

end
