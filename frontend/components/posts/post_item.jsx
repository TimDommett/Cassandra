import React from 'react';
import PostDetailViewContainer from './post_detail_view_container';

import { votePost, unVotePost } from '../../actions/posts';
import LikeItem from './like_item';


class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: false };
    this.toggleDetail = this.toggleDetail.bind(this);




}

  toggleDetail(e) {
    e.preventDefault();
    this.setState({
      description: !this.state.description
        });
  }





  render() {
    const { post , updatePost } = this.props;
    const { title } = post;
    let description;
    if (this.state.description) {
      description = <PostDetailViewContainer post={post} />;
    }

    return (
      <li className="todo-list-item threed grow">
        <div className="todo-header todo-list-item-child" onClick={this.toggleDetail}>
          <img className="index-image" src={post.photoUrl} onClick={this.toggleDetail}/>
          <h3 className="post-item-title"><a >{title}</a></h3>
        </div>
        {description}
        <LikeItem
        post={post}
        votePost={this.props.votePost}
        unVotePost={this.props.unVotePost}
        />

      </li>

    );
  }
}



export default PostItem;
