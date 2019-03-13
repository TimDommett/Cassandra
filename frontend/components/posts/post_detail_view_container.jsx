import { connect } from 'react-redux';
import PostDetailView from './post_detail_view';

import UpdateForm from './update_form_container';
// Actions
import { deletePost, updatePost } from '../../actions/posts';
// import { requestSteps } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch, { post }) => ({
  // requestSteps: () => dispatch(requestSteps(todo.id)),
  destroyPost: () => dispatch(deletePost(post)),
  updatePost: () => dispatch(updatePost(post)),
});

export default connect(
  null, // todo props is already passed in
  mapDispatchToProps
)(PostDetailView);
