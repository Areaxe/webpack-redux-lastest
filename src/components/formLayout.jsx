import React from 'react';
import style from 'style/components/form_layout.scss';
import classnames from 'util/classnames.js';

class FaIcon extends React.Component {
  render() {
    let { className, children, left } = this.props;
    let classSet = classnames("form-layout",
      { [className]: className }
    );
    return <div className={classSet}>
      <label className="layout-left">{left}</label>
      <div className="layout-main">{children}</div>
    </div>
  }
}
FaIcon.propTypes = {}
export default FaIcon;