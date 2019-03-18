import React from 'react';
import PostItem from './post_item';
import PostForm from '../posts_form/post_form';
import LikeItem from './like_item';
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
        <div className="navbar-spacer">
        </div>
        <h2>Description of what the page is about and brief thing giving suggestion of what they should do.
        </h2>
        <ul className="fade-in">
          {
            posts.map(post => (
              <PostItem
              key={`post${post.id}`}
              post={post}
              updatePost={updatePost}
              votePost={this.props.votePost}
              unVotePost={this.props.unVotePost}
              deletePost={deletePost}
              />
              )
            )
          }
        </ul>
        
        <div className="create-new-post ">
          <Link className="new_post_btn border-inset" to="/posts/new">Create New Post</Link>
        </div>
      </div>

    )
  }
}

export default PostIndex;
