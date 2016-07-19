class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :edit, :update]

  def index
    respond_to do |format|
      format.html
      format.json{ render json: Category.all }
    end
  end

  def show
  end

  def edit
  end

  def create
    @category = Category.create(category_params)
    render json: @category, status: :ok
  end

  def update
    @category.update!(category_params)
    render json: @category, status: :ok
  end

  def destroy
    Category.destroy(params[:id])
    render json: {success: true}, status: :ok
  end

  private

    def set_category
      @category = Category.find(params[:id])
    end

    def category_params
      params.require(:category).permit(:name)
    end
end
