import React from 'react';
import style from 'style/font/font-awesome.scss';
import classnames from 'util/classnames.js';

class FaIcon extends React.Component {
  render() {
    let {name, className} = this.props;
    let classSet = classnames('fa', {
      ['fa-' + name]: name,
      [className]: className
    });
    return <span className={classSet} onClick={this.props.onClick}></span>
  }
}
FaIcon.propTypes = {}
export default FaIcon;