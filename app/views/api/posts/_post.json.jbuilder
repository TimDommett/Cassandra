json.extract! post, :id, :title, :description, :link, :user_id, :categories
json.votes post.votes.count
json.voted_by_current_user !!post.votes.find_by(user_id: current_user.id)
