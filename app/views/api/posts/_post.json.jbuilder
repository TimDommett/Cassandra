json.extract! post, :id, :title, :description
# json.likes chirp.likes.count
# json.liked_by_current_user !!chirp.likes.find_by(user_id: current_user.id)
