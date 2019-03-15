class Api::VotesController < ApplicationController
  def create
    @vote = Vote.new
    @vote.user_id = current_user.id
    @vote.post_id = params[:id]
    if @vote.save
      @post = @vote.post
      render 'api/posts/show'
    else
      render json: @vote.errors.full_messages, status: 401
    end
  end

  def destroy
    @vote = Vote.find_by(user_id: current_user.id, post_id: params[:id])
    @vote.destroy
    @post = @vote.post
    render 'api/posts/show'
  end
end
