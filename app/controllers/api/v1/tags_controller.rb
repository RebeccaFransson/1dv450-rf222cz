class Api::V1::TagsController < Api::V1::BaseController

  def show
    @tag = Tag.find_by_id(params[:id])
    unless @tag.nil?
      respond_with :api, @tag
    else
      render json: { errors: "Couldn't find tag. Sure you wrote the right Id?" }, status: :not_found
    end
  end

  def index
    respond_with Tag.all
  end

  def create
    @tag = Tag.new(tag_params)
    @duplicated = Tag.find_by_name(@tag.name)
    if @duplicated.nil?
      if @tag.save
        respond_with :api, @tag, status: 201
      else
        render json: { errors: @tag.errors.messages }, status: :bad_request
      end
    else
      render json: { errors: "This tag already exist in the database" }, status: :conflict
    end

  end

  def destroy
    respond_with Restaurant.destroy(params[:id])
  end

  def tag_params
    params.require(:tag).permit(:name)
  end
end
