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

  // handleDelete(id){
  //   fetch(`/posts/${id}`,
  //   {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then((response) => {
  //       this.deleteFruit(id)
  //     })
  // }
  //
  // deletePost(id){
  //   newPosts = this.state.posts.filter((post) => post.id !== id)
  //   this.setState({
  //     posts: newPosts
  //   })
  // }

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
              // deletePost={deletePost}
              // likePost={this.props.likePost}
              // unLikePost={this.props.unLikePost}
              />
              )
            )
          }
        </ul>

        <div className="create-new-post">
          <Link className="new_post_btn" to="/posts/new">Create New Post</Link>
        </div>
      </div>

    )
  }
}

export default PostIndex;
