import React from 'react';
import Header from 'components/header.jsx';
import { fetchTopicsIfNeed,getTopics } from 'actions/topicAction';
import { connect } from 'react-redux';

const getNavList = () => (
  [
    {
      name: '全部',
      filter: 'all',
    },
    {
      name: '精华',
      filter: 'good'
    },
    {
      name: '招聘',
      filter: 'job'
    },
    {
      name: '分享',
      filter: 'share'
    },
    {
      name: '问答',
      filter: 'ask'
    },
  ]
)

function mapStateToProps() {
  return{
    navList: getNavList()
  }
}

const mapDispatchToProps = dispatch => ({
  getTopics: filter => dispatch(fetchTopicsIfNeed(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
