import { connect } from 'react-redux';
import PostDetailView from './post_detail_view';

import UpdateForm from './update_form_container';
// Actions
import { deletePost, updatePost } from '../../actions/posts';
import { requestComments } from '../../actions/comments';

const mapDispatchToProps = (dispatch, { post }) => ({
  requestComments: () => dispatch(requestComments(post.id)),
  destroyPost: () => dispatch(deletePost(post)),
  updatePost: () => dispatch(updatePost(post)),
});

export default connect(
  null, // todo props is already passed in
  mapDispatchToProps
)(PostDetailView);
