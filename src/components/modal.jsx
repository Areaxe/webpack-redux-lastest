import React from 'react';
import ReactDOM from 'react-dom';
import style from 'style/components/modal.scss';
const appRoot = document.getElementById('root');
const modalRoot = document.getElementById('modal-root');
import FaIcon from 'components/faIcon.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      onClose,
      children,
      insertRoot = false
    } = this.props;
    
    let content = <div className="modal">
      <div className="modal-inner">
        <FaIcon className="close-btn" name="close" onClick={onClose}/> {children}
      </div>
    </div>
    return (insertRoot
      ? ReactDOM.createPortal(content, appRoot)
      : content)
  }
}

export default Modal;