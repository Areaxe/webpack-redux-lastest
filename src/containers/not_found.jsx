import React,{Component} from 'react';
import {Link } from 'react-router-dom';
import style from 'style/containers/not_found.scss'

class List extends Component{
  render(){
    return <div className="not-found-page">
      <div className="not-found-text">404</div>
      <div className="not-found-remind">啊哦~，页面找不到了</div>
    </div>
  }
}

export default List;