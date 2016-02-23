class Api::V1::TagsController < Api::V1::BaseController

  def show
    @tag = Tag.find_by_id(params[:id])
    if @tag.nil?
      render json: { errors: "Couldn't find tag. Sure you wrote the right Id?" }, status: :not_found
    else
      respond_with :api, @tag
    end
  end

  def index
    respond_with Tag.all
  end

  def create
    @tag = Tag.new(tag_params)
    if Tag.find_by_name(@tag.name).nil?
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
    if @tag = Tag.find_by_id(params[:id])
      @tag.destroy
      render json: { action: "destroy", message: "The tag '#{@tag.name}' is now removed.", status: :ok}
    else
      render json: { errors: "Cound't find tag. Sure you wrote the right Id?" }, status: :not_found
    end
  end

  def tag_params
    params.require(:tag).permit(:name)
  end
end
