import React from 'react';

// Components
// import StepListContainer from '../step_list/step_list_container';

class PostDetailView extends React.Component {
  // componentDidMount() {
  //   this.props.requestSteps();
  // }

  render() {
    const { post, destroyPost } = this.props;
    return(
      <div>
        <p className="post-detail">{post.description}</p>
        <button className="delete-btn" onClick={ destroyPost }>
          Delete Post
        </button>
      </div>
    );
  }
}

export default PostDetailView;
