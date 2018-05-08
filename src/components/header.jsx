import React,{Component} from 'react';
import style from 'style/components/header.scss';

const Header = ({navList=[],getTopics})=>{
  console.log(navList)
  return <div className="header">
    <ul className="nav-list">
    {
      navList.map(item=>{
        return <li key={item.filter} onClick={()=>{getTopics({tab:item.filter});}}>
            {item.name}
          </li>
      })
    }
    </ul>
  </div>
}

export default Header;