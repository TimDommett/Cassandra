import React from 'react';
import merge from 'lodash/merge';

class CommentListItem extends React.Component {
  constructor(props) {
    super(props);
    // this.toggleComment = this.toggleComment.bind(this);
  }



  render() {
    return (
      <li className="comment-header">
        <div className="comment-info">
          <p>{this.props.comment.comment}</p>
          </div>
          <div className="comment-buttons">
        </div>
      </li>
    );
  }
}


export default CommentListItem;
