import React from 'react';
// import { votePost, unVotePost } from '../../actions/posts';

export default ({ post, votePost, unVotePost }) => {
  let voteButtonText = "Vote Up";
  let voteButtonAction = () => votePost(post.id);
  if (post.voted_by_current_user) {
    voteButtonText = "You Voted For This";
    voteButtonAction = () => unVotePost(post.id);
  }
  return (
    <li>
      <p><strong className="num-votes">Votes: {post.votes}</strong></p>
      <button onClick={voteButtonAction}>{voteButtonText}</button>
    </li>
  );
}
