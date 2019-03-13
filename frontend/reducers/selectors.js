export const allPosts = ({ posts }) => Object.keys(posts).map(id => posts[id]);

export const commentsByPostId = ({ comments }, post_id) => {
  const commentsByPostId = [];
  Object.keys(comments).forEach(commentID => {
    const comment = comments[commentID];
    if (comments[commentID].post_id === post_id) commentsByPostId.push(comment)
  })
  return commentsByPostId;
};
