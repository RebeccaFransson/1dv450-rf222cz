class Api::V1::BaseController < ApplicationController
  #before_filter :parse_request, :authenticate_user_from_token!
  protect_from_forgery with: :null_session

  respond_to :json, :xml

  OFFSET = 0
  LIMIT = 20

  def offset_params
    @offset = params[:offset].to_i if params[:offset].present?
    @limit = params[:limit].to_i if params[:limit].present?

    @offset ||= OFFSET
    @limit  ||= LIMIT
  end


end
