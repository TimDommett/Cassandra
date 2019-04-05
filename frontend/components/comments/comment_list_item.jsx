import React from 'react';
import merge from 'lodash/merge';

class CommentListItem extends React.Component {
  constructor(props) {
    super(props);
    // this.toggleComment = this.toggleComment.bind(this);
  }

  // toggleComment(e) {
  //   const toggledComment = merge({}, this.props.comment, {
  //     done: !this.props.step.done
  //   });
  //   this.props.updateStep(toggledStep);
  // }

  render() {
    return (
      <li className="comment-header">
        <div className="comment-info">
          <p>{this.props.comment.comment}</p>
        </div>
        <div className="comment-buttons">
          {/* <button
            className="delete-btn"
            onClick={this.props.destroyComment}>
            Delete
          </button> */}
        </div>
      </li>
    );
  }
}


export default CommentListItem;
