class HomeController < ApplicationController
  before_action :set_home, only: [:show, :edit, :update]

  def index
    respond_to do |format|
      format.html
      format.json{ render json: Home.all }
    end
  end

  def show
  end

  def edit
  end

  def create
    @home = Home.create(home_params)
    render json: @home, status: :ok
  end

  def update
    @home.update!(home_params)
    render json: @home, status: :ok
  end

  def destroy
    Home.destroy(params[:id])
    render json: {success: true}, status: :ok
  end

  private

    def set_home
      @home = Home.find(params[:id])
    end

    def home_params
      params.require(:home).permit(:name)
    end
end
