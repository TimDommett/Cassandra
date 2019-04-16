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
    this.clearSearch = this.clearSearch.bind(this);

  }

  componentDidMount() {
    this.props.fetchPosts();
    if (this.props.location.state) {
      this.state.category = this.props.location.state.category;

    }
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

  clearSearch() {
    this.setState({
      category: ""
    });
  }



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

    let postsExist;
      if (sortedPosts.length > 0) {

       postsExist = 
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
    } else {
        postsExist = (
          <div>
            <p className="no-posts-available">
              Oops, No Posts Where Found in Your Search... Clear the search to try find some
              other categories.
            </p>
            <button onClick={this.clearSearch}>Clear Search</button>
          </div>
        );

    };


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
            
            <div class="cntr" onChange={this.update("category")}>
              <input
                label="Search Post"
                placeholder="Categories"
                icon="search"
                className="category-search-field"
                onChange={this.update("category")}
              />

             
              <input type="radio" value="Software Development" name="category" class="radio"/> Software Development
              <input type="radio" className="post-search-by" value="Economics" name="category" class="radio"/> Economics
              <input type="radio" className="post-search-by" value="Mathematics" name="category" class="radio" /> Mathematics
              <input type="radio" className="post-search-by" value="Degrees" name="category" class="radio" /> Degrees
              <input type="radio" className="post-search-by" value="Science" name="category" class="radio" /> Science
              <input type="radio" className="post-search-by" value="Coding" name="category" class="radio" /> Coding
              <input type="radio" className="post-search-by" value="All Categories" name="" class="radio" /> All Categories


 
            </div>
          </div>

         {postsExist}
          
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
