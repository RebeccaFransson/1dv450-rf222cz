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

    unless Location.where(address_and_city: @loc.address_and_city).present?
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
    if @loc = Location.find_by_id(params[:id])
      @loc.destroy
      render json: { action: "destroy", message: "The location '#{@loc.name}' is now removed.", status: :ok}
    else
      render json: { errors: "Cound't find location. Sure you wrote the right Id?" }, status: :not_found
    end
  end


  private
  def location_params
    params.require(:location).permit(:address_and_city, :restaurant_id)
  end

end
