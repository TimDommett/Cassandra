import React from 'react';
import { withRouter } from 'react-router';
import Tags from '../posts/tags';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    // this.coords = { lat: props.lat, lng: props.lng };
    this.state = {
      title: '',
      description: '',
      link: '',

      // photoFile: null,
      // photoUrl: null
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

  // handleFile(e) {
  //   const file = e.currentTarget.files[0];
  //   const fileReader = new FileReader();
  //   fileReader.onloadend = () => {
  //     this.setState({ photoFile: file, photoUrl: fileReader.result });
  //   };
  //   if (file) {
  //     fileReader.readAsDataURL(file);
  //   }
  // }

  // This will be where we create our form data to submit our photo
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[title]', this.state.title);
    formData.append('post[description]', this.state.description);
    formData.append('post[link]', this.state.link);
    // add our coordinates
    // formData.append('post[lat]', this.coords['lat']);
    // formData.append('bench[lng]', this.coords['lng']);

    // if (this.state.photoFile) {
    //   formData.append('bench[photo]', this.state.photoFile);
    // }
    // This will fail because we do not have a AWS bucket set up for this project
    // presently.
    this.props.newPost(formData);
    this.navigateToPosts();
  }

  render() {
    const { title, description, link } = this.state;
    // const { lat, lng } = this.coords;
    // const preview = this.state.photoUrl ? <img height="200px" width="200px" src={this.state.photoUrl} /> : null;

    return (
      <div className="new-post-container">
        <div className="new-post-form">
          <h3 className="new-post-title">Create A Post!</h3>

          <form onSubmit={this.handleSubmit}>
          <label className="post-field">Title</label>
          <input
            type="text"
            value={title}
            onChange={this.update('title')}
            className="post-field-title"
          />
            <label className="post-field">Description</label>
            <input
              type="textarea"
              value={description}
              onChange={this.update('description')}
              className="post-field-description"
            />
            <label className="post-field">Link</label>
            <input
              type="text"
              value={link}
              onChange={this.update('link')}
              className="post-field-link"
            />


            <div className="button-holder">
              <input
                type="submit"
                value="Create Post"
                className="new-post-button"
              />
            </div>
            <Tags/>
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
