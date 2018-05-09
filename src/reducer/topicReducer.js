import TopicActon from '../actions/topicAction';
import { combineReducers } from 'redux';
// import {combineReducers} from 'redux';
import { handleActions, combineActions,createActions } from 'redux-actions';

const defaultState = {
  isFetching: false, 
  topics: {
  },
  filter: 'all',
  saveType: {}, 
};

const topics = handleActions(
  {
    'GET_TOPICS': (state,action) => {
      return Object.assign({},state,{isFetching: true, saveType: action.payload, page: action.payload.page});
    },

    'RECEIVE_TOPICS': (state,action) => {
      console.log(state.saveType)
      let { saveType, topics } = state;
      let { page, tab } = saveType;
      if(tab && topics[tab]){
        topics[tab]['page'+page] = action.payload;
      }
      else{
        topics[tab] = {};
        topics[tab]['page'+page] = action.payload;
      }
      return Object.assign({}, state, { isFetching: false, topics })
    },

    'SET_TOPIC_FILTER':(state,action)=>{
      return Object.assign({},state,{filter:action.payload});
    },
  },
  defaultState
);


export default topics;