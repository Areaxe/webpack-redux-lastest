import React,{Component} from 'react';
import {Link } from 'react-router-dom';
import style from 'style/containers/not_found.scss'
import image from '../../assets/images/treasure-box.gif';
import image2 from '../../assets/images/wz5.jpg';

class List extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    let showImg = this.state.showImg;
    return <div className="not-found-page">
      <div className="not-found-text">404</div>
      <div className="not-found-remind">啊哦~，页面找不到了</div>
    </div>
  }
}

export default List;