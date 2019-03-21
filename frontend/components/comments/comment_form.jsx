import React from 'react';
import { withRouter } from 'react-router';


class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      post_id: this.props.post_id,
      // user_id: user_id,
      // post_id: post_id,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const comment = Object.assign({}, this.state);
  //   this.props.createComment(this.props.post_id, comment).then(
  //     this.setState({
  //       comment: "",
  //     }) // reset form
  //   );
  // }

  handleSubmit(e) {
    e.preventDefault();
    // const post_id = parseInt(this.props.match.params.post_id);
    // const comment = Object.assign({}, this.state, {
    //   post_id: post_id
    // });
    const commentForm = new FormData();
    commentForm.append('comment[comment]', this.state.comment);
    commentForm.append('comment[post_id]', this.state.post_id);
    // commentForm.append('post[description]', this.state.description);
    // commentForm.append('post[link]', this.state.link);
    // commentForm.append('post[tags]', this.state.tags);
  //   // add our coordinates
  //   // formData.append('post[lat]', this.coords['lat']);
  //   // formData.append('bench[lng]', this.coords['lng']);
  //
  //   // if (this.state.photoFile) {
  //   //   formData.append('bench[photo]', this.state.photoFile);
  //   // }
  //   // This will fail because we do not have a AWS bucket set up for this project
  //   // presently.
    this.props.newComment(commentForm);
    // this.navigateToPosts();
  }

  render() {
    return (
      <form className="comment-form" onSubmit={ this.handleSubmit }>
        <label>Comment:

          <input
            className="comment-input"
            ref="comment"
            value={ this.state.comment }
            placeholder="Comment Here..."
            onChange={ this.update('comment') }
            required />
        </label>
        <button className="create-button">Post Comment!</button>

      </form>
    );
  }
}

export default withRouter(CommentForm);
