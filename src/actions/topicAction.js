import config from '../config/base.js';
import {createAction} from 'redux-actions';
import splicingUrl from '../util/splicingUrl';

const sendFetchTopic = createAction('GET_TOPICS',(params)=>{
  console.log(params);
  return params
});

export const getTopics = createAction(
  'RECEIVE_TOPICS', 
  async({ page, tab, limit }) => { //tab = ask share job good
  let url = splicingUrl(config.baseUrl + 'topics', { page, tab, limit });
  const result = await fetch(url)
    .then(response => response.json())
    .then(json => json );
  return result.data;
});

export const setTopicFilter = createAction(
  'SET_TOPIC_FILTER', 
  filter => filter
);

export const fetchTopicsIfNeed = ({ page=1,tab='all',limit=20 }) => 
  (dispatch, getState) => {
    let params = { page,tab,limit }
    if(shouldFetchTopics(getState().topicReducer,params)){
      dispatch(sendFetchTopic(params));
      return dispatch(getTopics(params));
    }
}

const shouldFetchTopics = (state, params) => { // //判断是否应该读取数据
  let {page,tab} = params;
  let {topics,isFetching} = state;
  let data = topics[tab]&&topics[tab]['page'+page];
  if(!data){
    return true;
  }
  if(!isFetching ){
    return false
  }
  return true;
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_GOOD: 'SHOW_GOOD',
  SHOW_JOB: 'SHOW_JOB',
  SHOW_ASK: 'SHOW_ASK'
}