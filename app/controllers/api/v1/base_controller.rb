class Api::V1::BaseController < ApplicationController
  #before_filter :parse_request, :authenticate_user_from_token!
  protect_from_forgery with: :null_session

  respond_to :json, :xml

  private


end
