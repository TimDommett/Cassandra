import React from 'react';
import PostDetailViewContainer from './post_detail_view_container';

// import { deletePost } from '../../actions/posts';


class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: false };
    this.toggleDetail = this.toggleDetail.bind(this);
    // this.toggleTodo = this.toggleTodo.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({
      description: !this.state.description
    });
  }

  // toggleTodo(e) {
  //   e.preventDefault();
  //   const toggledTodo = merge({}, this.props.todo, {
  //      done: !this.props.todo.done
  //    });
  //    this.props.updateTodo(toggledTodo);
  // }

  render() {
    const { post , updatePost } = this.props;
    const { title } = post;
    let description;
    if (this.state.description) {
      description = <PostDetailViewContainer post={post} />;
    }

    return (
      <li className="todo-list-item">
        <div className="todo-header">
          <h3><a onClick={this.toggleDetail}>{title}</a></h3>
        </div>
        {description}
      </li>
    );
  }
}


// const PostItem = ({ post }) => {
  // let likeButtonText = "You don't like this.";
  // let likeButtonAction = () => likePost(post.id);
  // if (post.liked_by_current_user) {
  //   likeButtonText = "You like this";
  //   likeButtonAction = () => unLikePost(post.id);
  // }
//   return (
//     <li>
//       <h3>{post.title}</h3>
//       <ul>{post.description}</ul>
//     </li>
//   );
// }

export default PostItem;
