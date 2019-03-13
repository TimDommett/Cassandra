import { connect } from 'react-redux';
import PostDetailView from './post_detail_view';
// Actions
import { deletePost } from '../../actions/posts';
// import { requestSteps } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch, { post }) => ({
  // requestSteps: () => dispatch(requestSteps(todo.id)),
  destroyPost: () => dispatch(deletePost(post))
});

export default connect(
  null, // todo props is already passed in
  mapDispatchToProps
)(PostDetailView);
