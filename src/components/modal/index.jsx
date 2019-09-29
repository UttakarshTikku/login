// @flow

import React, { Component } from 'react';
import './modal.css'

class Modal extends Component {
    render() { 
      let showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
      return (
        <div className={showHideClassName}>
          <section className='modal-main'>
            {this.props.children}
            <button
              onClick={this.props.handleClose}
            >
              Close
            </button>
          </section>
        </div>
      );
    }
}

// const Modal = ({ handleClose, show, children })
 
export default Modal;