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
      tags: [],
      categories: [],
      photoFile: null,
      photoUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.navigateToPosts = this.navigateToPosts.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  navigateToPosts() {
    this.props.history.push('/posts');
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  // tagging helper functions
  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
    const current_ind = this.state.tags.length;
    // console.log(this.state.tags[current_ind - 1].text);
    // this.props.update(tags)
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  // This will be where we create our form data to submit our photo
  handleSubmit(e) {
    e.preventDefault();
    // try while function
    // console.log(this.state.tags);
          // const categories = [];

    this.state.tags.map(tag =>
      // this.state.categories.push(tag[index].text)
      // categories = [],
      // const word = tag.text;
      this.state.categories.push(tag.text),
      // categories.push(tag.text),
    //   console.log(categories)
    );
    const formData = new FormData();
    formData.append('post[title]', this.state.title);
    formData.append('post[description]', this.state.description);
    formData.append('post[link]', this.state.link);
    // formData.append('post[tags]', this.state.tags);
    formData.append("post[categories]", this.state.categories);
    // add our coordinates
    // formData.append('post[lat]', this.coords['lat']);
    // formData.append('bench[lng]', this.coords['lng']);

    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
    // This will fail because we do not have a AWS bucket set up for this project
    // presently.
    this.props.newPost(formData);
    this.navigateToPosts();
  }

  render() {
    const { title, description, link, tags } = this.state;
    const preview = this.state.photoUrl ? <img className="image-preview new-post-form-child" width="100px" src={this.state.photoUrl} /> : null;

    return (
      <div className="new-post-container">
        <div className="new-post-form">
          <h3 className="new-post-title new-post-form-child">
            Create A Post!
          </h3>

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={this.update("title")}
              placeholder="Title or Name of Course..."
              className="post-field-title new-post-form-child"
            />
            <div className="button-holder">
              {preview}
              <input
                type="file"
                className="image-upload-button new-post-form-child"
                onChange={this.handleFile.bind(this)}
              />
            </div>
            <input
              type="textarea"
              value={description}
              onChange={this.update("description")}
              placeholder="Write a description of the course here..."
              className="post-field-description new-post-form-child"
            />
            <input
              type="text"
              value={link}
              onChange={this.update("link")}
              placeholder="Add a link to the course here..."
              className="post-field-link new-post-form-child"
            />

            <div className="button-holder new-post-form-child">
              <input
                type="submit"
                value="Create Post"
                className="new-post-button"
              />
            </div>
            <label className="post-field-tags new-post-form-child">
              Tags
            </label>
            <Tags
              // value={tags}
              tags={this.state.tags}
              handleDelete={this.handleDelete}
              handleAddition={this.handleAddition}
              handleDrag={this.handleDrag}
              // onChange={this.update('tags')}
              // update={this.update()}
            />
          </form>
          <div className="button-holder new-post-form-child">
            <button
              className="new-post-button new-post-form-child"
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
