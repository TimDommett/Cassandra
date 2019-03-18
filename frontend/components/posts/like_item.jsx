import React from 'react';
// import { votePost, unVotePost } from '../../actions/posts';

export default ({ post, votePost, unVotePost }) => {
  let voteButtonText = "You don't like this.";
  let voteButtonAction = () => votePost(post.id);
  if (post.voted_by_current_user) {
    voteButtonText = "You like this";
    voteButtonAction = () => unVotePost(post.id);
  }
  return (
    <li>
      <p><strong>Votes: {post.votes}</strong></p>
      <button onClick={voteButtonAction}>{voteButtonText}</button>
    </li>
  );
}
