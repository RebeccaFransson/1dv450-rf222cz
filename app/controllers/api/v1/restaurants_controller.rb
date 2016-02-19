class Api::V1::RestaurantsController < Api::V1::BaseController

  def show
    restaurant = Restaurant.find(params[:id])
    respond_with restaurant
  end
  def index
    render json: Restaurant.all
  end
end
