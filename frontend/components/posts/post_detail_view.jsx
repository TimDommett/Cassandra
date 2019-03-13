import React from 'react';
import CommentListContainer from '../comments/comment_list_container'

// Components
// import StepListContainer from '../step_list/step_list_container';

class PostDetailView extends React.Component {
  componentDidMount() {
    this.props.requestComments();
  }

  render() {
    const { post, destroyPost, updatePost } = this.props;
    return(
      <div>
        <p className="post-detail">{post.description}</p>
        <button className="update-btn" onClick={ updatePost }>
          Update Post
        </button>
        <button className="delete-btn" onClick={ destroyPost }>
          Delete Post
        </button>
        <CommentListContainer post_id={post.id} />
      </div>
    );
  }
}

export default PostDetailView;
