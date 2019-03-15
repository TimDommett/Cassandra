json.extract! post, :id, :title, :description, :user_id
json.votes post.votes.count
json.voted_by_current_user !!post.votes.find_by(user_id: current_user.id)
