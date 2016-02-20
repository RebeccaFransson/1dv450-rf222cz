class Api::V1::LocationsController < Api::V1::BaseController

  def index
    respond_with Location.all
  end
end
