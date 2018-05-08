import React from 'react';
import TopicItem from './topicItem.jsx';

const TopicList = ({list=[]})=>{
  return <div>
    {
      list.map(item=>(
        <TopicItem info={item} key={item.id} />
      ))
    }
  </div>
}

export default TopicList;