class Api::V1::CreatorsController <  Api::V1::BaseController

  before_action :offset_params, only: [:index]

  def show
    cre = Creator.find_by_id(params[:id])
    if cre.nil?
      render json: { errors: "Couldn't find creator. Sure you wrote the right Id?" }, status: :not_found
    else
      respond_with :api, cre
    end
  end

  def index
    creators = Creator.all
    creators = creators.drop(@offset)
    creators = creators.take(@limit)

    #@response = { offset: @offset, limit: @limit, amount: @creators.count, creators: @creators}
    respond_with :api, creators, status: :ok
  end
end
