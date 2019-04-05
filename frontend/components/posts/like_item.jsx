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
      <button className="todo-list-item-child" onClick={voteButtonAction}>{voteButtonText}</button>
      {/* <button className="todo-list-item-child vote-button" onClick={voteButtonAction}></button> */}
      <div className="todo-list-item-child vote-button" onClick={voteButtonAction}>
        <img className="rocket-button vert-move" src="https://image.flaticon.com/icons/svg/1705/1705667.svg" />
      </div>
    </li>
  );
}
