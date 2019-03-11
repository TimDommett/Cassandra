import React from 'react';

export default ({ post, likePost, unLikePost }) => {
  let likeButtonText = "You don't like this.";
  let likeButtonAction = () => likePost(post.id);
  if (post.liked_by_current_user) {
    likeButtonText = "You like this";
    likeButtonAction = () => unLikePost(post.id);
  }
  return (
    <li>
      <h3>{post.description}</h3>
      <p><strong>Likes: {post.likes}</strong></p>
      <button onClick={likeButtonAction}>{likeButtonText}</button>
    </li>
  );
}
