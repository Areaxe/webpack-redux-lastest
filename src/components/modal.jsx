import React from 'react';
import ReactDOM from 'react-dom';
import style from 'style/components/modal.scss';
const appRoot = document.getElementById('root');
const modalRoot = document.getElementById('modal-root');
import FaIcon from 'components/faIcon.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.className='modal';
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-inner">
          <FaIcon className="close-btn" name="close" />
          {this.props.children}
        </div>
      </div>,
      this.el,
    );
  }
}

export default Modal;