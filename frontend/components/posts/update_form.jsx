import React from 'react';
import { withRouter } from 'react-router';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToPosts = this.navigateToPosts.bind(this);
  }

  navigateToPosts() {
    this.props.history.push('/posts');
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

 
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[title]', this.state.title);
    formData.append('post[description]', this.state.description);
    this.props.updatePost(formData);
    this.navigateToPosts();
  }

  render() {
    const { title, description } = this.state;
    
    return (
      <div className="new-post-container">
        <div className="new-post-form">
          <h3 className="new-post-title">Update Post</h3>

          <form onSubmit={this.handleSubmit}>
          <label className="post-field">Title</label>
          <input
            type="text"
            value={title}
            onChange={this.update('title')}
            className="post-field"
          />
            <label className="post-field">Description</label>
            <input
              type="text"
              value={description}
              onChange={this.update('description')}
              className="post-field"
            />


            <div className="button-holder">
              <input
                type="submit"
                value="Create Post"
                className="new-post-button"
              />
            </div>
          </form>

          <div className="button-holder">
            <button
              className="new-post-button"
              onClick={this.navigateToPosts}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PostForm);
