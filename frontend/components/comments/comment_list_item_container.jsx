import { connect } from 'react-redux';
import CommentListItem from './comment_list_item';
// Actions
import { updateComment, destroyComment } from '../../actions/comments';

const mapDispatchToProps = (dispatch, { comment }) => ({
  destroyComment: () => dispatch(destroyComment(comment)),
  updateComment: updatedComment => dispatch(updateComment(updatedComment))
});

export default connect(
  null, // step prop is already passed in
  mapDispatchToProps
)(CommentListItem);
