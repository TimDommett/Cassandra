import React from 'react';
import PostItem from './post_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <ul>
          {
            posts.map(post => (
              <PostItem
              key={`post${post.id}`}
              post={post}
              likePost={this.props.likePost}
              unLikePost={this.props.unLikePost}
              />
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default PostIndex;
