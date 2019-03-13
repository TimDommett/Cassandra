class Api::PostsController < ApplicationController

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      render :show
    else
      render @post.errors.full_messages, status: 401
    end
  end

  def update
    @post = selected_post
    if @post && @post.update_attributes(post_params)
      render :show
    elsif !@post
      render json: ['Could not locate post'], status: 400
    else
      render json: @post.errors.full_messages, status: 401
    end
  end

  def show
    @post = selected_post
  end

  def index
    @posts = Post.all
  end

  def destroy
    # @todo = current_user.todos.find(params[:id])
    # @todo.destroy
    # render json: @todo, include: :tags
    @post = selected_post
    if @post
      @post.destroy
      render :show
    else
      render ['Could not find post']
    end
  end

  private

  def selected_post
    Post.find_by(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :description, :user_id)
  end
end
