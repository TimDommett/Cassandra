import { getPosts, postLikeToPost, deleteLikeFromPost } from '../utils/posts';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_SINGLE_POST = 'RECEIVE_SINGLE_POST';


const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts,
});

const receiveSinglePost = post => ({
  type: RECEIVE_SINGLE_POST,
  post,
});

export const fetchPosts = () => dispatch => getPosts()
  .then(posts => dispatch(receivePosts(posts)));

export const likePost = id => dispatch => postLikeToPost(id)
  .then(post => dispatch(receiveSinglePost(post)));

export const unLikePost = id => dispatch => deleteLikeFromPost(id)
  .then(post => dispatch(receiveSinglePost(post)));
