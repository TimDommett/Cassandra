class Api::TagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)
    @tag.user_id = current_user.id
    @tag.post_id = selected_post.id
    if @tag.save
      render :show
    else
      render @tag.errors.full_messages, status: 401
    end
  end

  # def update
  #   @post = selected_post
  #   if @post && @post.update_attributes(post_params)
  #     render :show
  #   elsif !@post
  #     render json: ['Could not locate post'], status: 400
  #   else
  #     render json: @post.errors.full_messages, status: 401
  #   end
  # end

  def show
    @tag = selected_tag
  end

  def index
    @tags = Tag.all
  end

  # def destroy
  #   @post = current_user.posts.find(params[:id])
  #   @post.destroy
    # render json: @post
    # @post = selected_post
    # if @post
    #   @post.destroy
    #   render :show
    # else
    #   render ['Could not find post']
    # end
  # end

  private

  def selected_post
    Post.find_by(params[:id])
  end

  def selected_tag
    Tag.find_by(params[:id])
  end

  def tag_params
    params.permit(:tag, :post_id, :user_id)
  end
end
