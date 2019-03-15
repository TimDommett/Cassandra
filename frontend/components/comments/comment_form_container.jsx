import { connect } from 'react-redux';

import { newComment } from '../../actions/comments';
import CommentForm from './comment_form';
import {commentsByPostId} from '../../reducers/selectors';

const mapStateToProps = (state, { post_id }) => ({
  comments: commentsByPostId(state, post_id),
  post_id
});

const mapDispatchToProps = dispatch => ({
  newComment: comment => dispatch(newComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
