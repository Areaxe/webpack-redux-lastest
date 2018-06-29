import React from 'react';
import style from 'style/components/input.scss';
import FaIcon from 'components/faIcon.jsx';
import classnames from 'util/classnames.js';

class Input extends React.Component {
  dataValidate(){  //策略模式
    let validateList = {
      minLength: function(){
        
      }
    }
  }
  render() {
    let {name,className,value,children,type} = this.props;
    return <div className={classnames('input-container',{[className]:className})} >
      <input className="com-input" type={type} />
      <FaIcon name="close" className="close-icon" />
    </div>
  }
}
Input.propTypes = {

}
export default Input;