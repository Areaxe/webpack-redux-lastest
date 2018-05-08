import React from 'react';
import Header from 'components/header.jsx';
import { fetchTopicsIfNeed,getTopics,setTopicFilter } from 'actions/topicAction';
import { connect } from 'react-redux';

const getNavList = (filter) => (
  [
    {
      name: '全部',
      id: 'all',
      active: filter == 'all'
    },
    {
      name: '精华',
      id: 'good',
      active: filter == 'good'
    },
    {
      name: '招聘',
      id: 'job',
      active: filter == 'job'
    },
    {
      name: '分享',
      id: 'share',
      active: filter == 'share'
    },
    {
      name: '问答',
      id: 'ask',
      active: filter == 'ask'
    },
  ]
)

const mapStateToProps = (state) => {
  return{
    navList: getNavList(state.topicReducer.filter)
  }
}

const mapDispatchToProps = dispatch => ({
  getTopics: filter => {
    dispatch(fetchTopicsIfNeed(filter));
    dispatch(setTopicFilter(filter.tab))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
