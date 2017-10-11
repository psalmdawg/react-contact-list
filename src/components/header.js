import React, { Component } from 'react';
import Modal from 'react-modal';
import NewContact from './new-contact'

const customStyles = {
  content : {
    width                 : '450px',
    top                   : '30%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Header extends Component{
  constructor(){
    super();
    this.state = { isModalOpen: false }
    this.modalController = this.modalController.bind(this)
  }

  modalController(){
    this.setState({isModalOpen : !this.state.isModalOpen});
  }

  render() {
    return (

      <div>
        <nav className="navbar navbar-default" role="navigation">
          <div className="navbar-header">
            <div className="navbar-brand" href="#">My Contacts</div>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="active" onClick={this.modalController}><a href="#">New Contact</a></li>
          </ul>
        </nav>

        <Modal isOpen={this.state.isModalOpen}
          contentLabel="Modal"
          style={customStyles}>
          <NewContact updateModal={this.modalController} />
        </Modal>

      </div>
    );
  }
}

export default Header;
