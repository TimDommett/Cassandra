import React from 'react';
import PostItem from './post_item';
import PostForm from '../posts_form/post_form';
import LikeItem from './like_item';
import { Link } from 'react-router-dom';


class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: ""};
    // this.state = {search_param: ""}
  }




  componentDidMount() {
    this.props.fetchPosts();
  }


    update(property) {
      return e => this.setState({
        [property]: e.target.value
      });
    }

    // Need to create dropdown so can change what you are filtering by


  render() {
    const { posts, updatePost, deletePost } = this.props;
    const {search} = this.state;
    const filteredPosts = posts.filter( post => {
      return post.title.toLowerCase().indexOf( search.toLowerCase()) !== -1
    })
    return (
      <div>
        <div className="navbar-spacer">
        </div>
        <h2>Description of what the page is about and brief thing giving suggestion of what they should do.
        </h2>
        <div>
          <input label="Search Post" icon="search" onChange={this.update("search")}/>
        </div>
        <ul className="fade-in">
          {
            filteredPosts.map(post => (
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
