import React from 'react';
import PostItem from './post_item';
import PostForm from '../posts_form/post_form';
import LikeItem from './like_item';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const options = [
  { value: 'title', label: 'Title' },
  { value: 'description', label: 'description' }
];

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: "", selectedOption: "title"};
    // this.state = {search_param: ""}
  }


  componentDidMount() {
    this.props.fetchPosts();
  }
  componentWillUnmount() {
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
    const {search, selectedOption} = this.state;
    const filteredPosts = posts.filter( post => {
      if (selectedOption == "title") {
        return post.title.toLowerCase().indexOf( search.toLowerCase()) !== -1}
      if (selectedOption == "description") {
        return post.description.toLowerCase().indexOf( search.toLowerCase()) !== -1 }
    })
    const sortedPosts = filteredPosts.sort((a, b) => b.votes - a.votes);
    return (
      <div>
        <div className="navbar-spacer"></div>
        <div className="posts-header-container">
          <h2 className="posts-copy">Description of what the page is about and brief thing giving suggestion of what they should do.
          </h2>
          <div>
            <input label="Search Post" placeholder="Search for a post here..." icon="search" className="posts-search-field" onChange={this.update("search")}/>
          </div>
          <Select
          value={selectedOption}
          placeholder="Search by:"
          className="post-search-by"
          onChange={this.update("selectedOption")}
          options={options}
          />
          <ul className="fade-in">
            {
              sortedPosts.map(post => (
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
        </div>
        <div className="create-new-post ">
          <Link className="new_post_btn border-inset" to="/posts/new">Create New Post</Link>
        </div>
      </div>

    )
  }
}

export default PostIndex;
