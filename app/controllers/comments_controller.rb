class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update]

  def index
    respond_to do |format|
      format.html
      format.json{ render json: Comment.all }
    end
  end

  def show
  end

  def edit
  end

  def create
    @category = Comment.create()
    render json: @comment, status: :ok
  end

  def update
    @comment.update!(comment_params)
    render json: @comment, status: :ok
  end

  def destroy
    Comment.destroy(params[:id])
    render json: {success: true}, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    def set_post
      @post = Post.find(params[:post_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:comment)
    end
end
