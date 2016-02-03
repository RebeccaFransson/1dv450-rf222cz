class AppsController < ApplicationController


  before_action :is_logged_in

  def show
    #@apps = App.find_by_user_id(current_user.id)
    @apps = User.find_by_id(current_user.id).apps
  end

  def new
    @app = App.new
  end

  def create
    @app = App.new(app_params)
    @app.user_id = current_user.id
    @app.key = [*('a'..'z'),*('0'..'9')].shuffle[0,50].join
    if @app.save
      redirect_to apikeys_path
    else
      render action: 'new'
    end
  end

  def remove
    @app = App.find(params[:format])
    @app.destroy
    redirect_to apikeys_path
  end

  private
  def app_params#strong parameters
    params.require(:app).permit(:app_name)
  end



end
