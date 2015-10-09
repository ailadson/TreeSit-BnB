class Api::TreesController < ApplicationController
  def index
    @trees = Tree.inBounds(params[:bounds])
    render json: @trees
  end

  def create
  end
end
