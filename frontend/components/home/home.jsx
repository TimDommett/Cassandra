import React from 'react';
import { Link } from "react-router-dom";



class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.redirect = this.redirect.bind(this);
  }


  update(property) {
    return e =>
      this.setState({
        [property]: e.target.value
      });
  }

  redirect() {
    const thing = this.state.search;
    this.props.history.push({pathname: '/posts', state: { category: thing}});
  }


  render() {
    const { search } = this.state;


    return (

  <div className="home fade-in">
    <div className="navbar-spacer"></div>
    <div className="hero-img-frame">
      <img className="hero-img" src="https://gdurl.com/8OBs" />
    </div>
    <h1 className="home-copy-title">Created as a testament to the power of free education.</h1>
    <h2 className="home-copy">Come learn, share and make the world a better place by making access to information and education free for everyone.</h2>
    <form onSubmit={this.redirect}>
        <input label="Search home" placeholder="Search for free courses here..." icon="search" className="search-home"
          onChange={this.update("search")} >
      </input>
    </form>
  </div>
)}};


    export default HomePage;
