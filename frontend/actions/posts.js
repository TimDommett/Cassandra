import { getPosts, postLikeToPost, deleteLikeFromPost, createPost, revisePost, destroyPost } from '../utils/posts';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_SINGLE_POST = 'RECEIVE_SINGLE_POST';
export const REMOVE_POST = "REMOVE_POST";


const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts,
});

const receiveSinglePost = post => ({
  type: RECEIVE_SINGLE_POST,
  post,
});

export const removePost = post => ({
  type: REMOVE_POST,
  post
});


export const fetchPosts = () => dispatch => getPosts()
  .then(posts => dispatch(receivePosts(posts)));

export const votePost = id => dispatch => postVoteToPost(id)
  .then(post => dispatch(receiveSinglePost(post)));

export const unVotePost = id => dispatch => deleteVoteFromPost(id)
  .then(post => dispatch(receiveSinglePost(post)));


export const newPost = post => dispatch => createPost(post)
  .then(post => dispatch(receiveSinglePost(post)));


export const updatePost = post => dispatch => (
  revisePost(post).then(post => dispatch(receivePost(post)))
);

export const deletePost = post => dispatch => (
  destroyPost(post).then(post => dispatch(removePost(post)))
);
