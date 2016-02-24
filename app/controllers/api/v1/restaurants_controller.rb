class Api::V1::RestaurantsController < Api::V1::BaseController

  def show
    @rest = Restaurant.find_by_id(params[:id])
    if @rest.nil?
      render json: { errors: "Cound't find restaurant. Sure you wrote the right Id?" }, status: :not_found
    else
      respond_with :api, @rest
    end
  end

  def index

    # Offset and limit
    #@rest = @rest.drop(@offset)
    #@rest = @rest.take(@limit)

    #render json: { errors: params[:tag_id] }, status: :conflict
    if params[:tag_id].present?
      @tag = Tag.find_by_id(params[:tag_id])
      @rest = @tag.restaurants

    else
      #respond_with Restaurant.all.sort_by { |e| e[:name]}
    end

    #@response = { :offset => @offset, :limit => @limit, :amount => @fish_catches.count, :catches => @fish_catches }
    respond_with :api, @rest, status: :ok
  end

  def create
    @rest = Restaurant.new(restaurants_params.except(:tags))

    ##Is there any tags to this restaurant?
    if restaurants_params[:tags].present?
      tag_params = restaurants_params[:tags]

      tag_params.each do |tag|
        if Tag.exists?(tag)
          @rest.tags << Tag.find_by_name(tag["name"])
        else
          @rest.tags << Tag.new(tag)
        end
      end
    end

    if Restaurant.exists?(@rest)
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
        respond_with :api, @tag do |format|
          format.json { render json: { action: "update", restaurant: {name: @rest.name, description: @rest.description, locations: @rest.locations} }, status: :created }
        end
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
