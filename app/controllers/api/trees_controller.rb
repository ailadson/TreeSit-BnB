class Api::TreesController < ApplicationController
  def index
    @trees = Tree.inBounds(params[:bounds])
    render json: @trees
  end

  def create
    @tree = Tree.new(tree_params)

    if @tree.save
      render json: @tree
    else
      render json: @tree.errors.full_messages, status: 404
    end
  end

  private
  def tree_params
    params.require(:tree).permit(:lat, :lng, :description)
  end
end
