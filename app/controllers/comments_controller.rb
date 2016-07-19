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
    user_id = @current_user.id
    category_id = @post.category_id
    @comment = @post.comments.new(comment_params)
    @comment.category_id = category_id
    @comment.user_id = user_id
    @comment.save

    render json: @product, status: :ok
  end

  # PATCH/PUT /comments/1
  # PATCH/PUT /comments/1.json
  def update
    respond_to do |format|
      if @comment.update(comment_params)
        format.html { redirect_to @comment, notice: 'Comment was successfully updated.' }
        format.json { render :show, status: :ok, location: @comment }
      else
        format.html { render :edit }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    Comment.destroy(params[:id])
    respond_to do |format|
      format.html { redirect_to comments_url, notice: 'Comment was successfully destroyed.' }
      format.json { head :no_content }
    end
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
