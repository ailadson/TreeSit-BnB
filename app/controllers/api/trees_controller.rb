class Api::TreesController < ApplicationController
  def index
    @trees = Tree.all
    render json: @trees
  end

  def create
  end
end
