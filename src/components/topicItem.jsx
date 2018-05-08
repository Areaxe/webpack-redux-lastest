import React from 'react';
import style from 'style/components/topicItem.scss';
import { Link } from 'react-router-dom';
import moment from 'moment';
moment.locale('zh-cn');

const topicItem = ({info})=>{

  return <Link to={`/topic/${info.id}`} className="topic-item">
    <img className="user-logo" src={info.author.avatar_url} />
    <div className="topic-tab">{
      (()=>{
        switch(info.tab){
          case 'ask':
            return '问答';
          case 'good':
            return '精华';
          case 'job':
            return '招聘';
          case 'share':
            return '分享';
           default:
            return '' 
        }
      })()
      }</div>
    <div className="topic-title">{info.title}</div>
    <div className="topic-time">{moment(info.last_reply_at).startOf('second').fromNow()}</div>
  </Link>
}

export default topicItem;