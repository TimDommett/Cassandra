import React from 'react';
// Components
import CommentListItemContainer from './comment_list_item_container';
import CommentForm from './comment_form';

const CommentList = ({ comments, post_id, createComment }) => {
  const commentItems = comments.map(comment => (
    <CommentListItemContainer
      key={comment.id}
      comment={comment} />
  ));

  return (
    <div>
      <ul className="comments-list">
        { commentItems }
      </ul>
      <CommentForm post_id={ post_id } createComment={ createComment } />
    </div>
  )
};

export default CommentList;
