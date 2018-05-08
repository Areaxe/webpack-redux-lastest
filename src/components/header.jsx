import React, { Component } from 'react';
import style from 'style/components/header.scss';

const Header = ({ navList = [], getTopics }) => {
  return <div className="header">
    <ul className="nav-list">
      {
        navList.map(item => {
          return <li
            key={item.id}
            className={item.active ? 'active' : ''}
            onClick={() => { getTopics({ tab: item.id }); }}
          >
            {item.name}
          </li>
        })
      }
    </ul>
  </div>
}

export default Header;