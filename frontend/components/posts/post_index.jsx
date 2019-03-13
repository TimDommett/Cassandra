import React from 'react';
import PostItem from './post_item';
import PostForm from '../posts_form/post_form';
import { Link } from 'react-router-dom';


class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts, updatePost, deletePost } = this.props;
    return (
      <div>
        <ul>
          {
            posts.map(post => (
              <PostItem
              key={`post${post.id}`}
              post={post}
              updatePost={updatePost}
              // deletePost={deletePost}
              // likePost={this.props.likePost}
              // unLikePost={this.props.unLikePost}
              />
              )
            )
          }
        </ul>

        <div>
          <Link className="new_post_btn" to="/posts/new">Create New Post</Link>
        </div>
        <button className="delete-btn" onClick={ deletePost }>
            Delete Post
        </button>
      </div>

    )
  }
}

export default PostIndex;
