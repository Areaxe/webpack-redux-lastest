import React,{Component} from 'react';
import style from 'style/components/header.scss';

class Header extends Component{
  changeRouter(filter){
    this.props.dispatch(getIfGetTop({ tab: filter }));
  }
  render(){
    let navList = [
      {
        name: '全部',
        filter: 'all',
      },
      {
        name: '精华',
        filter: 'good'
      },
      {
        name: '招聘',
        filter: 'job'
      },
      {
        name: '分享',
        filter: 'share'
      },
      {
        name: '问答',
        filter: 'ask'
      },
    ]
    return <div className="header">
      <ul className="nav-list">
      {
        navList.map(item=>{
          return <li key={item.filter} onClick={()=>{this.filterTpoic(item.filter);}}>
              {item.name}
            </li>
        })
      }
      </ul>
    </div>
  }
}

export default Header;