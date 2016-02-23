class Api::V1::RestaurantsController < Api::V1::BaseController

  def show
    respond_with Restaurant.find(params[:id])
  end

  def index
    respond_with Restaurant.all.sort_by { |e| e[:name]}
  end

  def create
    @rest = Restaurant.new(restaurants_params)
    if @rest.save
      respond_with :api, @rest, status: 201
    else
      respond_with :api, @rest, status: 400
    end
  end

  #def update
  #  respond_with Restaurant.update(params[:id], params[:products])
  #end

  def destroy
    respond_with Restaurant.destroy(params[:id])
  end

  def restaurants_params
    params.require(:restaurant).permit(:name, :description, :stars)
  end

end
