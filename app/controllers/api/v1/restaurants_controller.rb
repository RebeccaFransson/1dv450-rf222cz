class Api::V1::RestaurantsController < Api::V1::BaseController

  def show
    respond_with Restaurant.find(params[:id])
  end
  def index
    respond_with Restaurant.all
  end
  def create
    respond_with Restaurant.create(params[:product])
  end

  def update
    respond_with Restaurant.update(params[:id], params[:products])
  end

  def destroy
    respond_with Restaurant.destroy(params[:id])
  end
end
