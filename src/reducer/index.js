import topicReducer from './topicReducer.js';
import topicDetailReducer from './topicDetailReducer.js';
import { combineReducers } from 'redux';

export default combineReducers({
    topicReducer,
    topicDetail:topicDetailReducer,
  })