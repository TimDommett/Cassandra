class Api::CommentsController < ApplicationController
  # start here then to the other part, try make like posts because that works
  def create
    comment = Comment.new(comment_params)

    if comment.save
      render json: comment
    else
      render json: comment.errors.full_messages, status: 422
    end
  end

  def index
    comments = Post.find(params[:post_id]).comments
    render json: comments
  end

  def destroy
    comment = Comment.find(params[:id]).destroy
    render json: comment
  end

  def update
    comment = Comment.find(params[:id])
    if comment
      comment.update(comment_params)
      render json: comment
    else
      render json: { message: 'not found', status: 404 }
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:comment, :post_id, :user_id)
  end
end
