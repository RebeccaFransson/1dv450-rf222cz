class Api::V1::LocationsController < Api::V1::BaseController

  before_action :offset_params, only: [:index]
  before_action :key_access
  before_action :authenticate, only: [:create, :destroy, :update]

  def show
    loc = Location.find_by_id(params[:id])
    if loc.nil?
      render json: { errors: "Couldn't find location. Sure you wrote the right Id?" }, status: :not_found
    else
      respond_with :api, loc #@loc.address_and_city
    end
  end

  def index
    #respond_with Location.all
    if params[:restaurant_id].present?
      rest = Restaurant.find_by_id(params[:restaurant_id])
      loc = rest.locations
    else
      loc = Location.all
    end

    if loc.present?
      # Offset and limit
      loc = loc.drop(@offset)
      loc = loc.take(@limit)

      #@response = { :offset => @offset, :limit => @limit, :amount => @loc.count, :locations => @loc }
      respond_with :api, loc, status: :ok
    else
      render json: { errors: "Couldn't find any locations." }, status: :not_found
    end

  end

  def create
    loc = Location.new(location_params)
    if Location.where(address_and_city: loc.address_and_city).present?
      render json: { errors: "This location already exist in the database" }, status: :conflict
    else
      if loc.save
        respond_with :api, loc, status: :created
      else
        render json: { errors: loc.errors.messages }, status: :bad_request
      end
    end
  end

  def update
    if loc = Location.find_by_id(params[:id])
      if loc.update(location_params)
        l = loc.as_json(only: [:id, :address_and_city, :latitude, :longitude])
        respond_with :api, loc do |format|
          format.json { render json: { action: "update", address_and_city: l }, status: :created }
        end
      else
        render json: { errors: loc.errors.messages }, status: :bad_request
      end
    else
      render json: { errors: "Couldn't find location. Sure you wrote the right Id?" }, status: :not_found
    end
  end

  def destroy
    if loc = Location.find_by_id(params[:id])
      loc.destroy
      render json: { action: "destroy", message: "The location '#{loc.name}' is now removed.", status: :ok}
    else
      render json: { errors: "Couldn't find location. Sure you wrote the right Id?" }, status: :not_found
    end
  end


  private
  def location_params
    json_params = ActionController::Parameters.new( JSON.parse(request.body.read) )
    json_params.require(:location).permit(:address_and_city)
  end

end
