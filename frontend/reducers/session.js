import {
  RECIEVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session';

// default state:

const _nullSession = {
  currentUser: null,
};

export default (state = _nullSession, action) => {
  // stop augmenting of state
  Object.freeze(state);
  switch (action.type) {
    case RECIEVE_CURRENT_USER:
        return Object.assign({}, {currentUser: action.user});
    case LOGOUT_CURRENT_USER:
      return _nullSession;
      // if neither of these just return the previous state
    default:
      return state;

  }
};
