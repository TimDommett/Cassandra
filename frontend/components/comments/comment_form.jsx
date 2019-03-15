import React from 'react';
import { withRouter } from 'react-router';


class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
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

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    this.props.createComment(this.props.post_id, comment).then(
      this.setState({
        comment: "",
      }) // reset form
    );
  }

  render() {
    return (
      <form className="comment-form" onSubmit={ this.handleSubmit }>
        <label>Comment:

          <input
            className="input"
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
