import React from 'react';
import style from 'style/components/button.scss';
import classnames from 'util/classnames.js';

class Button extends React.Component {
  render() {
    let {name='primary', className, value, children,onClick,type} = this.props;

    let classNames = classnames('button', {
      [name]: name,
      [className]: className
    })

    return (
      <button 
        onClick={onClick} 
        className={classNames}
        type={type}>
        {value || children}
    </button>
    )
  }
}
Button.propTypes = {

}
export default Button;