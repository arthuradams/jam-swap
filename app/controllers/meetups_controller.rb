class MeetupsController < ApplicationController
  before_action :set_meetup, only: [:show, :edit, :update]

  def index
    respond_to do |format|
      format.html
      format.json{ render json: Meetup.all }
    end
  end

  def show
  end

  def edit
  end

  def create
    @meetup = Meetup.create(meetup_params)
    render json: @meetup, status: :ok
  end

  def update
    @meetup.update!(meetup_params)
    render json: @meetup, status: :ok
  end

  def destroy
    Meetup.destroy(params[:id])
    render json: {success: true}, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_meetup
      @meetup = Meetup.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def meetup_params
      params.require(:meetup).permit(:title, :description)
    end
end
