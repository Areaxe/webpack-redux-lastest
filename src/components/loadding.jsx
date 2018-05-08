import React from 'react';
import Modal from './modal.jsx';
import style from 'style/components/loadding.scss';

const Loadding = ({children}) => {
    return <div className="loadding-panel">{children}</div>
}

export default Loadding;