import { connect } from 'react-redux';

import { updatePost } from '../../actions/posts';
import UpdateForm from './update_form';

const mapStateToProps = (state, { location }) => ({
  lat: new URLSearchParams(location.search).get('lat'),
  lng: new URLSearchParams(location.search).get('lng')
});

const mapDispatchToProps = dispatch => ({
  updatePost: post => dispatch(updatePost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateForm);
