import React,{Component} from 'react';
import {Link } from 'react-router-dom';
import style from 'style/containers/home.scss';
import Header from './headerWithProps.jsx';
import { fetchTopicsIfNeed,getTopics } from '../actions/topicAction';
import { connect } from 'react-redux';
import TopicList from 'components/topicList.jsx';
import Loadding from 'components/loadding.jsx';

class Home extends Component{
  componentDidMount(){
    this.props.dispatch(fetchTopicsIfNeed({}));
  }
  
  render(){
    let topicInfo = this.props.topicInfo;
    console.log(topicInfo)
    let { page, filter, topics,isFetching } = topicInfo;
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
      </div>
    </React.Fragment>
  }
}

function mapStateToProps (state) {
  return {
    topicInfo: state.topicReducer
  };
}

export default connect(mapStateToProps )(Home);