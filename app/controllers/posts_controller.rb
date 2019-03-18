class PostsController < ApplicationController

  def new
    @post = Post.new
    render :new
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      redirect_to post_url(@post)
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
    if @post
      render :show
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  def index
    @posts = if params[:user_id]
                Post.where(user_id: params[:user_id])
              else
                Post.all
              end
    render :index
  end

  def edit
    @Post = Post.find(params[:id])
    render :edit
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to post_url(@post)
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      redirect_to posts_url
    else
      render plain: "You can't destroy what's not there."
    end
  end

  private

  def post_params
    post.require(:post).permit(:title, :description, :link, :user_id)
  end
end
