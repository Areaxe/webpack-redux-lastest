import TopicActon from '../actions/topicAction';
// import {combineReducers} from 'redux';
import { handleActions, combineActions,createActions } from 'redux-actions';
import {getTopics} from '../actions/topicAction';

const defaultState = {
  isFetching: false, 
  topics: [] };
const reducer = handleActions(
  {
    'GET_TOPICS': (state) => {
      console.log('getters')
      return Object.assign({},state,{isFetching: true});
    },
    'RECEIVE_TOPICS': (state,action) => {
      return Object.assign({},{isFetching: false,topics: action.payload})
    },
    'SET_VISIBILITY_FILTER':(state,action)=>{
      return Object.assign({},state,{filter:action.payload});
    }
  },
  defaultState
);

// getFilterTopic(){

// }

export default reducer;