import React from 'react';
// import CommentListContainer from '../comments/comment_list_container'

// Components
import CommentListContainer from '../comments/comment_list_container';

class PostDetailView extends React.Component {
  // componentDidMount() {
  //   this.props.requestComments();
  // }


  render() {
    const { post, destroyPost, updatePost } = this.props;
    const { votePost, unVotePost } = post => {
      let voteButtonText = "You don't like this.";
      let voteButtonAction = () => votePost(post.id);
      if (post.voted_by_current_user) {
        voteButtonText = "You like this";
        voteButtonAction = () => unVotePost(post.id);
      }

    };
    return(
      <div className="fade-in">
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
