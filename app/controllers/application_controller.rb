class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception

  private
  helper_method :logged_in_user

  def logged_in_user #om instansen inte är satt körs korden bakom ||
    @current ||= User.find(session[:userId]) if session[:userId]
  end

  def is_logged_in?
    redirect_to root_path if logged_in_user.nil?
  end

  def isAdmin?
    unless logged_in_user.isAdmin?
      if logged_in_user.nil?
        redirect_to root_path
      else
        redirect_to apps_path
      end
    end
  end

  def not_logged_in?
    redirect_to apps_path if !logged_in_user.nil?
  end

  protected
  # This is added for handling backbutton "problem"
  def set_cache_buster
    response.headers["Cache-Control"] = "no-cache, no-store, max-age=0, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "Fri, 01 Jan 1990 00:00:00 GMT"
  end

end
