import React from 'react';
import { withRouter } from 'react-router';


class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      post_id: this.props.post_id,
      user_id: currentUser.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }



  handleSubmit(e) {
    e.preventDefault();

    const commentForm = new FormData();
    commentForm.append('comment[comment]', this.state.comment);
    commentForm.append('comment[post_id]', this.state.post_id);
    commentForm.append('comment[user_id]', this.state.user_id);
 
    this.props.newComment(commentForm);
  }

  render() {
    return (
      <form className="comment-form" onSubmit={ this.handleSubmit }>
        <label>Comment:

          <input
            className="comment-input"
            ref="comment"
            value={ this.state.comment }
            placeholder="Write comment Here..."
            onChange={ this.update('comment') }
            required />
        </label>
        <button className="create-button">Post Comment!</button>

      </form>
    );
  }
}

export default withRouter(CommentForm);
