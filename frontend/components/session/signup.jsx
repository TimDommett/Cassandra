import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/posts'));
  }

  render () {
    return (
      <div className="session-form">
        <h2>Sign Up!</h2>
        <form>
          <div className="navbar-spacer">
          </div>
          <label>Username:
            <input
            type="text"
            value={this.state.username}
            onChange={this.handleInput('username')}
            />
          </label>
          <label>email:
            <input
            type="text"
            value={this.state.email}
            onChange={this.handleInput('email')}
            />
          </label>
          <label>Password:
            <input
            type="password"
            value={this.state.password}
            onChange={this.handleInput('password')}
            />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
          <p>Dont worry, we won't send you any emails without your consent!</p>
        </form>
      </div>
    );
  }
};

export default Signup;
