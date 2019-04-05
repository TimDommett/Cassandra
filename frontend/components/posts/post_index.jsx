import React from 'react';
import PostItem from './post_item';
import PostForm from '../posts_form/post_form';
import LikeItem from './like_item';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const options = [
  { value: 'title', label: 'Title' },
  { value: 'description', label: 'Description' }
];

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "", selectedOption: "title", category: null };
    // this.state = {search_param: ""}
  }

  componentDidMount() {
    this.props.fetchPosts();
  }
  componentWillUnmount() {
    this.props.fetchPosts();
  }

  update(property) {
    return e =>
      this.setState({
        [property]: e.target.value
      });
  }

  // Need to create dropdown so can change what you are filtering by

  // filtered = posts.map post.categories.include(search)     - both .toLowerCase()     -give suggestions.

  render() {
    const { posts, updatePost, deletePost } = this.props;
    const { search, selectedOption, category } = this.state;
    const categorizedPosts = posts.filter(post => {
      if ( !category  ) {
      return (
        post
      );
    } 
    else {


        // return post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;

        if (post.categories != undefined) {
          return (
            post.categories.indexOf(category.toLowerCase()) !== -1
            );
        }
      
        }});

    const filteredPosts = categorizedPosts.filter(post => {
      if (selectedOption == "title") {
        return (
          post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        );
      }
      if (selectedOption == "description") {
        return (
          post.description.toLowerCase().indexOf(search.toLowerCase()) !==
          -1
        );
      }
    });
    const sortedPosts = filteredPosts.sort((a, b) => b.votes - a.votes);


    return (
      <div>
        <div className="navbar-spacer" />
        <div className="posts-header-container">
          <h2 className="posts-copy">
            Search here to find courses to start learning for your new
            career or to improve your skills at your current job. Vote for
            any recources you think have value and post any courses you have
            found to help others know what could help them get to that next
            stage of their careers.
          </h2>
          <div>
            <input
              label="Search Post"
              placeholder="Search for a post here..."
              icon="search"
              className="posts-search-field"
              onChange={this.update("search")}
            />
          </div>
          <Select
            value={selectedOption}
            // inputValue={selectedOption}
            placeholder="Search by:"
            className="post-search-by"
            onChange={this.update("selectedOption")}
            options={options}
          />

          <div className="filtering">
            
            <div class="cntr">
              <input
                label="Search Post"
                placeholder="Categories"
                icon="search"
                className="category-search-field"
                onChange={this.update("category")}
              />


              <label for="opt1" class="radio">
                <input type="radio" name="rdo" id="opt1" class="hidden" />
                <span class="label" />Software Developement
              </label>

              <label for="opt2" class="radio">
                <input type="radio" name="rdo" id="opt2" class="hidden" />
                <span class="label" />two
              </label>

              <label for="opt3" class="radio">
                <input type="radio" name="rdo" id="opt3" class="hidden" />
                <span class="label" />more
              </label>

              <label for="opt4" class="radio">
                <input type="radio" name="rdo" id="opt4" class="hidden" />
                <span class="label" />Whatever
              </label>
            </div>
          </div>

          <ul className="fade-in">
            {sortedPosts.map(post => (
              <PostItem
                key={`post${post.id}`}
                post={post}
                updatePost={updatePost}
                votePost={this.props.votePost}
                unVotePost={this.props.unVotePost}
                deletePost={deletePost}
              />
            ))}
          </ul>
        </div>
        <div className="create-new-post ">
          <Link className="new_post_btn border-inset" to="/posts/new">
            Create New Post
          </Link>
        </div>
      </div>
    );
  }
}

export default PostIndex;
