class Api::V1::LocationsController < Api::V1::BaseController

  def show
    @loc = Location.find(params[:id])
    respond_with @loc#, Restaurant.near(@loc.address_and_city)
  end

  def index
    respond_with Location.all
  end

  def create
    @loc = Location.new(location_params)

    if @loc.save
      respond_with :api, @loc, status: :created
    else
      render json: { errors: @loc.errors.messages }, status: :bad_request
    end
  end

  #def update
  #  respond_with Location.update(params[:id], params[:products])
  #end

  def destroy
    respond_with Location.destroy(params[:id])
  end

  def restaurants
    respond_with Restaurants.near(params[:address_and_city])
  end





  private
  def location_params
    params.require(:location).permit(:address_and_city, :restaurant_id)
  end


  def city_address
    hej = "{:address}, {:city}"
  end

end
