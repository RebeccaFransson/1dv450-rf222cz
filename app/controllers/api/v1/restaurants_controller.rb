class Api::V1::RestaurantsController < Api::V1::BaseController

  def show
    @rest = Restaurant.find_by_id(params[:id])
    unless @rest.nil?
      respond_with :api, @rest
    else
      render json: { errors: "Cound't find restaurant. Sure you wrote the right Id?" }, status: :not_found
    end
  end

  def index
    respond_with Restaurant.all.sort_by { |e| e[:name]}
  end

  def create
    @rest = Restaurant.new(restaurants_params)
    @duplicated = Restaurant.find_by_name(@rest.name)

    unless @duplicated.present?
      if @rest.save
        respond_with :api, @rest, status: 201
      else
        render json: { errors: @rest.errors.messages }, status: :bad_request
      end
    else
      render json: { errors: "This restaurant already exist in the database" }, status: :conflict
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
