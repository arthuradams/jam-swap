class JobsController < ApplicationController
  before_action :set_job, only: [:show, :edit, :update]

  def index
    respond_to do |format|
      format.html
      format.json{ render json: Job.all }
    end
  end

  def show
  end

  def edit
  end

  def create
    @job = Job.create(job_params)
    render json: @job, status: :ok
  end

  def update
    @job.update!(job_params)
    render json: @job, status: :ok
  end

  def destroy
    Job.destroy(params[:id])
    render json: {success: true}, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_job
      @job = Job.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def job_params
      params.require(:job).permit(:title, :description, :url)
    end
end
