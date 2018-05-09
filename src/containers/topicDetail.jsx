import React,{Component} from 'react';
import {Link } from 'react-router-dom';
import style from 'style/containers/topic_detail.scss';
import Header from './headerWithProps.jsx';
import { fetchTopicDetailIfNeed,getTopics } from '../actions/topicAction';
import { connect } from 'react-redux';
import TopicList from 'components/topicList.jsx';
import Loadding from 'components/loadding.jsx';

class TopicDetail extends Component{
  componentDidMount(){
    let id = this.props.match.params.id;
    this.props.dispatch(fetchTopicDetailIfNeed(id));
  }
        
  //<CommentList list={replies} />
  render(){
    let topicInfo = this.props.topicInfo;
    let id = this.props.match.params.id;
    let topic = topicInfo[id] || {};
    let replies = topic.replies || [];
    console.log(replies);
    return <React.Fragment>
      <div className="topic-detail-page">
      <div className="main">
          <h2 className="title">{topic.title}</h2>
          <div className="content" dangerouslySetInnerHTML={{__html:topic.content}}></div>
        </div>
        <div className="topic-replies">
        <div className="replise-title">回复</div>
          {
            replies.map(item=>{
              return <div className="comment-item" key={item.id}>
                <img className="user-logo" src={item.author.avatar_url} />
                <div className="comment-content" dangerouslySetInnerHTML={{__html: item.content}}></div>
              </div>
            })
          }
        </div>
      </div>
    </React.Fragment>
  }
}

function mapStateToProps (state) {
  return {
    topicInfo: state.topicDetail
  };
}

export default connect(mapStateToProps )(TopicDetail);