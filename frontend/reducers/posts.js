import { RECEIVE_POSTS, RECEIVE_SINGLE_POST } from '../actions/posts';

export default (state = {}, action) => {
  Object.freeze(state);
  const posts = {};
  switch (action.type) {
    case RECEIVE_POSTS:
      action.posts.forEach((post) => {
        posts[post.id] = post;
      });
      return posts;
    case RECEIVE_SINGLE_POST:
      return Object.assign({}, state, { [action.post.id]: action.post });
    default:
      return state;
  }
};
