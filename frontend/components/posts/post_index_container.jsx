import React from 'react';
import PostIndex from './post_index';
import { fetchPosts, likePost, unLikePost, updatePost, deletePost } from '../../actions/posts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key])
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  createPost: post => dispatch(createPost(post)),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: () => dispatch(deletePost(post)),
  // likePost: id => dispatch(likePost(id)),
  // unLikePost: id => dispatch(unLikePost(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
