class Api::V1::RestaurantsController < Api::V1::BaseController

  before_action :offset_params, only: [:index]
  before_action :authenticate, only: [:create, :destroy, :update]
  before_action :key_access

  skip_before_action :verify_authenticity_token, only: [:create, :destroy, :update]

  def show
    @rest = Restaurant.find_by_id(params[:id])
    if @rest.nil?
      render json: { errors: "Couldn't find restaurant. Sure you wrote the right Id?" }, status: :not_found
    else
      respond_with :api, @rest
    end
  end

  def index
    if params[:tag_id].present?
      @tag = Tag.find_by_id(params[:tag_id])
      @rest = @tag.restaurants
    elsif params[:creator_id]
      @creator = Creator.find_by_id(params[:creator_id])
      @rest = @creator.restaurants
    elsif params[:lat] && params[:lon]
      @loc = Location.near([params[:lat], params[:lon]], 50)
      @rest = []
      @loc.each do |loc|
        @rest.push(Restaurant.find_by_id(loc.restaurant_id))
      end
    elsif params[:address_and_city]
      @loc = Location.near(params[:address_and_city], 50)
      @rest = []
      @loc.each do |loc|
        @rest.push(Restaurant.find_by_id(loc.restaurant_id))
      end
    else
      @rest = Restaurant.all.sort_by { |e| e[:name]}
    end

    #@rest = @rest.search(params[:query]) if params[:query].present?

    if @rest.present?
      # Offset and limit
      @rest = @rest.drop(@offset)
      @rest = @rest.take(@limit)

      #@response = { :offset => @offset, :limit => @limit, :amount => @rest.count, :restaurants => @rest }
      respond_with :api, @rest, status: :ok
    else
      render json: { errors: "Couldn't find any restaurants." }, status: :not_found
    end


  end

  def create
    @rest = Restaurant.new(restaurants_params.except(:tags))
    @rest.creator_id = current_user.id

    ##Is there any tags to this restaurant?
    if restaurants_params[:tags].present?
      tag_params = restaurants_params[:tags]

      tag_params.each do |tag|
        if Tag.find_by_name(tag["name"]).present?
          @rest.tags << Tag.find_by_name(tag["name"])
        else
          @rest.tags << Tag.create(tag)
        end
      end
    end

    if Restaurant.find_by_name(@rest.name).present?
      render json: { errors: "This restaurant already exist in the database" }, status: :conflict
    else
      if @rest.save
        respond_with :api, @rest, status: :created
      else
        render json: { errors: @rest.errors.messages }, status: :bad_request
      end
    end
  end

  def update
    if @rest = Restaurant.find_by_id(params[:id])
      if @rest.update(restaurants_params)
        @restloc = @rest.locations.as_json(only: [:id, :address_and_city, :latitude, :longitude])
        respond_with :api, @tag do |format|
          format.json { render json: { action: "update", restaurant: {id: @rest.id, name: @rest.name, description: @rest.description, locations: @restloc} }, status: :created }

        end
        #respond_with :api, @rest, status: :ok
      else
        render json: { errors: @rest.errors.messages }, status: :bad_request
      end
    else
      render json: { errors: "Couldn't find restaurant. Sure you wrote the right Id?" }, status: :not_found
    end
  end

  def destroy
    if @rest = Restaurant.find_by_id(params[:id])
      @rest.destroy
      render json: { action: "destroy", message: "The restaurant '#{@rest.name}' is now removed.", status: :ok}
    else
      render json: { errors: "Couldn't find restaurant. Sure you wrote the right Id?" }, status: :not_found
    end
  end

  def restaurants_params
    json_params = ActionController::Parameters.new( JSON.parse(request.body.read) )
    json_params.require(:restaurant).permit(:name, :description, :stars, tags: [:name])
  end

end
