class Api::V1::LocationsController < Api::V1::BaseController

  def show
    @loc = Location.find_by_id(params[:id])
    unless @loc.nil?
      respond_with :api, @loc #@loc.address_and_city
    else
      render json: { errors: "Couldn't find location. Sure you wrote the right Id?" }, status: :not_found
    end
  end

  def index
    respond_with Location.all
  end

  def create
    @loc = Location.new(location_params)
    @duplicated = Location.where(address_and_city: @loc.address_and_city)

    unless @duplicated.present?
      if @loc.save
        respond_with :api, @loc, status: :created
      else
        render json: { errors: @loc.errors.messages }, status: :bad_request
      end
    else
      render json: { errors: "This location already exist in the database" }, status: :conflict
    end
  end

  #def update
  #  respond_with Location.update(params[:id], params[:products])
  #end

  def destroy
    respond_with Location.destroy(params[:id])
  end


  private
  def location_params
    params.require(:location).permit(:address_and_city, :restaurant_id)
  end

end
