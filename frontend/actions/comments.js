import * as CommentAPIUtil from '../utils/comments';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";


// sync actions
export const receiveComments = comments => ({
  type: RECEIVE_Comments,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});



// async actions
export const requestComments = postId => dispatch => (
  CommentAPIUtil.fetchComments(postId)
  .then(comments => dispatch(receiveComments(comments)))
);

export const createComment = (postId, comment) => dispatch => (
  CommentAPIUtil.createComment(postId, comment)
  .then(comment => dispatch(receiveComment(comment)))
);


export const updateComment = comment => dispatch => (
  CommentAPIUtil.updateComment(comment)
  .then(comment => dispatch(receiveComment(comment)))
);

export const destroyComment = comment => dispatch => (
  CommentAPIUtil.destroyComment(comment)
  .then(comment => dispatch(removeComment(comment)))
);
