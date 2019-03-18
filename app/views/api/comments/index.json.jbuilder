json.array! @comments do |comment|
  json.partial! 'api/posts/post_id/comments', comment: comment
end
