class AppsController < ApplicationController
  def index
    @apps = App.all
  end

  def new
    @app = App.new
    @user = User.find(session[:userId])
  end
end
