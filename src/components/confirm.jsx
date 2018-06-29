import React from 'react';
import style from 'style/components/confirm.scss';
import classnames from 'util/classnames.js';
import Button from 'components/button.jsx';
import Modal from 'components/modal.jsx';
import PopComponent from 'components/popComponent.jsx';

class Confirm extends React.Component {
  render() {
    let { className, title, children, content, onClose, onCancel,onConfirm,getIcon } = this.props;

    let classNames = classnames('confirm-container', {
      [name]: name,
      [className]: className
    })

    return (
      <Modal onClose={onClose}>
        <div className={classNames}>
          <div className="confirm-header">
            {getIcon()}
            <h3 className="confirm-title">{title}</h3>
          </div>
          <div className="confirm-content">{content || children}</div>
          <div className="button-group">
            <Button name="light-primary" onClick={(e)=>{onCancel && onCancel(e)}}>取消</Button>
            <Button name="primary" onClick={onConfirm}>确定</Button>
          </div>
        </div>
      </Modal>
    )
  }
}
Confirm.propTypes = {

}
export default PopComponent(Confirm);