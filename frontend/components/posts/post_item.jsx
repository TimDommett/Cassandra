import React from 'react';

const PostItem = ({ post }) => {
  // let likeButtonText = "You don't like this.";
  // let likeButtonAction = () => likePost(post.id);
  // if (post.liked_by_current_user) {
  //   likeButtonText = "You like this";
  //   likeButtonAction = () => unLikePost(post.id);
  // }
  return (
    <li>
      <h3>{post.title}</h3>
      <ul>{post.description}</ul>
    </li>
  );
}

export default PostItem;


// <p><strong>Likes: {post.likes}</strong></p>
// <button onClick={likeButtonAction}>{likeButtonText}</button>
