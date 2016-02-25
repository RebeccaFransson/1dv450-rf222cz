class Api::V1::TagsController < Api::V1::BaseController

  before_action :offset_params, only: [:index]
  before_action :key_access
  before_action :authenticate, only: [:create, :destroy, :update]

  def show
    @tag = Tag.find_by_id(params[:id])
    if @tag.nil?
      render json: { errors: "Couldn't find tag. Sure you wrote the right Id?" }, status: :not_found
    else
      respond_with :api, @tag
    end
  end

  def index
    @tag = Tag.all
    @tag = @tag.drop(@offset)
    @tag = @tag.take(@limit)

    #@response = { :offset => @offset, :limit => @limit, :amount => @tag.count, :tags => @tag }
    respond_with :api, @tag, status: :ok
  end

=begin
  def create
    @tag = Tag.new(tag_params)
    if Tag.find_by_name(@tag.name).nil?
      if @tag.save
        respond_with :api, @tag, status: :created
      else
        render json: { errors: @tag.errors.messages }, status: :bad_request
      end
    else
      render json: { errors: "This tag already exist in the database" }, status: :conflict
    end

  end
=end
  def update
    if @tag = Tag.find_by_id(params[:id])
      if @tag.update(tag_params)
        respond_with :api, @tag do |format|
          format.json { render json: { action: "update", tag_name: @tag.name }, status: :created }
        end
      else
        render json: { errors: @tag.errors.messages }, status: :bad_request
      end
    else
      render json: { errors: "Couldn't find tag. Sure you wrote the right Id?" }, status: :not_found
    end
  end

  def destroy
    if @tag = Tag.find_by_id(params[:id])
      @tag.destroy
      render json: { action: "destroy", message: "The tag '#{@tag.name}' is now removed.", status: :ok}
    else
      render json: { errors: "Couldn't find tag. Sure you wrote the right Id?" }, status: :not_found
    end
    end

  def tag_params
    json_params = ActionController::Parameters.new( JSON.parse(request.body.read) )
    json_params.require(:tag).permit(:name)
  end
end
