import React from 'react';
import style from 'style/components/button.scss';
import classnames from 'util/classnames.js';

class Button extends React.Component {
  render() {
    let {name,className,value,children} = this.props;
    return <button onClick={this.props.onClick} className={classnames('button',{
      [name]: name || 'promary',
      [className]:className
    })} >{value || children}</button>
  }
}
Button.propTypes = {

}
export default Button;