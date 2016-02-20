class Api::V1::TagsController < Api::V1::BaseController
  def index
    respond_with Tag.all
  end
end
