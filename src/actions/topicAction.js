import config from '../config/base.js';
import {createAction} from 'redux-actions';
import splicingUrl from '../util/splicingUrl';
let baseUrl = config.baseUrl;

const sendFetchTopicList = createAction('GET_TOPICS',(params)=>{
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

export const fetchTopicsIfNeed = ({ page=5,tab='all',limit=20 }) => 
  (dispatch, getState) => {
    let params = { page,tab,limit }
    if(shouldFetchTopics(getState().topicReducer,params)){
      dispatch(sendFetchTopicList(params));
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

export const fetchTopicDetailIfNeed = (id) => 
  (dispatch, getState) => {
    let data = getState();
    console.log(data);
    if(data.topicDetail && data.topicDetail[id])
      return;
    return dispatch(getTopicDetail(id));
  }

const sendFetchTopicDetail = createAction('GET_TOPIC_DETAIL');

export const getTopicDetail = createAction(
  'GET_TOPIC_DETAIL', 
  async(id) => { //tab = ask share job good
  const result = await fetch(baseUrl+ '/topic/' + id)
    .then(response => response.json())
    .then(json => json );
  return result.data;
});
  