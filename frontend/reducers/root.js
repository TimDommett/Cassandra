import { combineReducers } from 'redux';
import sessionReducer from './session';
import entitiesReducer from './entities';

import commentsReducer from './comments';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  comments: commentsReducer,
});
