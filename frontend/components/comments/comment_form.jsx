import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      done: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const step = Object.assign({}, this.state);
    this.props.createComment(this.props.post_id, step).then(
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
            placeholder="walk to store"
            onChange={ this.update('comment') }
            required />
        </label>
        <button className="create-button">Post Comment!</button>
      </form>
    );
  }
}

export default CommentForm;
