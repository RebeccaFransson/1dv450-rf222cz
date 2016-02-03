class AdminsController < ApplicationController

  before_action :is_admin

  def index
    @apps = App.all
  end

end
