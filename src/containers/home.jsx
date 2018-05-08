import React,{Component} from 'react';
import {Link } from 'react-router-dom';
import style from 'style/containers/home.scss';
import Header from './headerWithProps.jsx';
import { fetchTopicsIfNeed,getTopics } from '../actions/topicAction';
import { connect } from 'react-redux';
import TopicList from 'components/topicList.jsx';

console.log(fetchTopicsIfNeed)
class Home extends Component{
  componentDidMount(){
    this.props.dispatch(fetchTopicsIfNeed({tab:'job'}));
  }
  
  render(){
    let state = this.props.state;
    console.log(state)
    return <React.Fragment>
      <Header />
      <div className="home-page">
        <div className="main">
          {
            state.isFetching?<div>fetching data</div>:
            <TopicList list={state.topics} />
          }
        </div>
      </div>
    </React.Fragment>
  }
}

function mapStateToProps (state) {
  return {
    state
  };
}

export default connect(mapStateToProps )(Home);