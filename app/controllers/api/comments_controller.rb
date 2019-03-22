class Api::CommentsController < ApplicationController
  # start here then to the other part, try make like posts because that works


  def create
    @comment = Comment.new(comment_params)
    # @comment.post_id = params[:post_id]
    # @comment.user_id = current_user.id
    if @comment.save
      render :index
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def index
    @comments = Comment.where(selected_post)
    render json: @comments
  end

  def destroy
    comment = Comment.find(params[:id]).destroy
    render json: comment
  end



  # def update
  #   comment = Comment.find(params[:id])
  #   if comment
  #     comment.update(comment_params)
  #     render json: comment
  #   else
  #     render json: { message: 'not found', status: 404 }
  #   end
  # end

  private

  def selected_comment
    comment.find_by(params[:post_id])
  end

  def selected_post
    # Post.find_by(params[:id])
    params[:post_id]
  end

  def comment_params
    params.require(:comment).permit(:comment, :post_id, :user_id)
  end

end
