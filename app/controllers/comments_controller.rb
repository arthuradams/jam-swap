class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update]

  def index
    @post = Post.find(params[:post_id])
    respond_to do |format|
      format.html
      format.json{ render json: @post.comments }
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def edit
  end

  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comment.create(comment_params)
    render json: @comment, status: :ok
  end

  def update
    @comment = Comment.find(params[:id])
    binding.pry
    @comment.update(comment_params)
    respond_to do |format|
      format.html
      format.json{ render json: @comment}
    end
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
      params.require(:comment).permit(:message)
    end
end
