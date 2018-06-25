import React,{Component} from 'react';
import {Link } from 'react-router-dom';
import style from 'style/containers/home.scss';
import Header from './headerWithProps.jsx';
import { fetchTopicsIfNeed,getTopics } from '../actions/topicAction';
import { connect } from 'react-redux';
import TopicList from 'components/topicList.jsx';
import Loadding from 'components/loadding.jsx';
import $ from 'jQuery';

class Home extends Component{
  componentDidMount(){
    this.props.dispatch(fetchTopicsIfNeed({}));
  }
  
  render(){
    let topicListInfo = this.props.topicListInfo;
    let { page, filter, topics,isFetching } = topicListInfo;
    let topicList = topics[filter] && topics[filter]['page'+page];

    return <React.Fragment>
      <Header />
      <div className="home-page">
        <div className="main">
          {
            topicList?
              <TopicList style={{ opacity: isFetching ? 0.5 : 1 }} list={topicList} />:
              (isFetching?<Loadding>fetching data...</Loadding>:
              <div>Empty.</div>)
          }
        </div>
        <button className="btn" >aaa</button>
      </div>
    </React.Fragment>
  }
}

function mapStateToProps (state) {
  return {
    topicListInfo: state.topicReducer
  };
}

export default connect(mapStateToProps )(Home);