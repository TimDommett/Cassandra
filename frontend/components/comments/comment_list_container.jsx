import { connect } from 'react-redux';
import CommentList from './comment_list';
// Actions
import { commentsByPostId } from '../../reducers/selectors';
import { createComment } from '../../actions/comments';

const mapStateToProps = (state, { post_id }) => ({
  comments: commentsByPostId(state, post_id),
  post_id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createComment: (...args) => dispatch(createComment(...args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
