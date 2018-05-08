import config from '../config/base.js';
import {createAction} from 'redux-actions';
import splicingUrl from '../util/splicingUrl';
// import { ASYNC_PHASES } from 'redux-action-tools';

const sendFetchTopic = createAction('GET_TOPICS');

export const getTopics = createAction(
  'RECEIVE_TOPICS', 
  async({ page, tab, limit = 10 }) => { //tab = ask share job good
  let url = splicingUrl(config.baseUrl + 'topics', { page, tab, limit });
  const result = await fetch(url)
    .then(response => response.json())
    .then(json => json );
  return result.data;
});

export const setTopicFilter = createAction(
  'SET_TOPIC_FILTER', 
  filter=> filter
);

export const fetchTopicsIfNeed = (params) => 
  (dispatch, getState) => {
    if(shouldFetchTopics(getState(),params)){
      dispatch(sendFetchTopic(dispatch,params));
      return dispatch(getTopics(params));
    }
}

const shouldFetchTopics = (state, params) => { // //判断是否应该读取数据
  return true;
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_GOOD: 'SHOW_GOOD',
  SHOW_JOB: 'SHOW_JOB',
  SHOW_ASK: 'SHOW_ASK'
}