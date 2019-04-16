import React from 'react';
// import CommentListContainer from '../comments/comment_list_container'

// Components
import CommentListContainer from '../comments/comment_list_container';

class PostDetailView extends React.Component {
  componentDidMount() {
    this.props.requestComments();
  }


  render() {
    const { post, destroyPost, updatePost } = this.props;

    return(
      <div className="fade-in todo-list-item-child">
        <p className="post-detail">{post.description}</p>
        <label className="">Link:</label>
        <a href={post.link}> {" " + post.link}</a>
        <br></br>
        <button className="delete-btn" onClick={ destroyPost }>
          Delete Post
        </button>
        <CommentListContainer post_id={post.id} />
      </div>
    );
  }
}

export default PostDetailView;
