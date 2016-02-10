class AdminsController < ApplicationController

  before_action :isAdmin?

  def index
    @apps = App.all
  end

end
