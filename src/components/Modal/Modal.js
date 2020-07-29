import React from 'react';
import './Modal.css';

const modal = (props) => {
    let modalCssClasses = ['Modal', props.show ? 'ModalOpen' : 'ModalClose'];
    return (
        <div className={modalCssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>Dismiss</button>
        </div>
    );
};

export default modal;