class Api::V1::LocationsController < Api::V1::BaseController

  def show
    respond_with Location.find(params[:id])
  end

  def index
    respond_with Location.all
  end

  def create
    loc = Location.new()
    respond_with Location.create(params[:product])
  end

  def update
    respond_with Location.update(params[:id], params[:products])
  end

  def destroy
    respond_with Location.destroy(params[:id])
  end

  private
  def location_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

end
