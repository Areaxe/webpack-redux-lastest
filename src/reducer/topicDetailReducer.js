import TopicActon from '../actions/topicAction';
import { combineReducers } from 'redux';
// import {combineReducers} from 'redux';
import { handleActions, combineActions,createActions } from 'redux-actions';

const defaultState = {};

const topicDetail = handleActions(
  {
    'GET_TOPIC_DETAIL': (state,action) =>{
      let data = action.payload;
      if(data){
        return Object.assign({},state,{[data.id]:data});
      }
      return state;
    }
  },
  defaultState
)

export default topicDetail;