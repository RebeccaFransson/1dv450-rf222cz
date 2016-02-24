class AppsController < ApplicationController

  before_action :is_logged_in?
  before_action :set_cache_buster, only: [:index, :new, :create]

  def index
    @apps = User.find_by_id(logged_in_user.id).apps
  end

  def new
    @app = App.new
  end

  def create
    @app = App.new(app_params)
    @app.user_id = logged_in_user.id
    @app.key = SecureRandom.hex #[*('a'..'z'),*('0'..'9')].shuffle[0,50].join
    if @app.save
      redirect_to apps_path
    else
      render action: 'new'
    end
  end

  #def remove#villdöpa om denna t desroty
    def destroy
    @app = App.find(params[:id])
    if @app.user_id == logged_in_user.id || isAdmin?
      @app.destroy
    end
    redirect_to apps_path
  end

  private
  def app_params#strong parameters
    params.require(:app).permit(:app_name)
  end

end
