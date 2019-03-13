import { connect } from 'react-redux';

import { newPost } from '../../actions/posts';
import PostForm from './post_form';

const mapStateToProps = (state, { location }) => ({
  lat: new URLSearchParams(location.search).get('lat'),
  lng: new URLSearchParams(location.search).get('lng')
});

const mapDispatchToProps = dispatch => ({
  newPost: post => dispatch(newPost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
