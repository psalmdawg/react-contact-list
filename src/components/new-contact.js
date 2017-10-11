import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateContact} from '../actions/update-contacts';

class NewContact extends Component {

  constructor(props) {
  super(props);
    this.handleFNameChange = this.handleFNameChange.bind(this)
    this.handleLNameChange = this.handleLNameChange.bind(this)
    this.handleTelephoneChange = this.handleTelephoneChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.showTheState=this.showTheState.bind(this)

    this.state = {
        firstName:'',
        lastName:'',
        email:'',
        telephone:''
      }

  }

  console(entry) {
    console.log(entry)
  }

  updateText(){
    console.log(this.state.value)
    return(
      <div>{this.state.value}</div>
    )
  }

  showTheState(){
    console.log(this.props.contacts)
  }

  handleFNameChange(e) {
    console.log(e.target)
    this.setState({firstName: e.target.value});
  }

  handleLNameChange(e) {
    this.setState({lastName: e.target.value});
  }
  handleTelephoneChange(e) {
    this.setState({telephone: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  onSubmitForm(e){
    e.preventDefault()
    this.props.updateContact(this.state)
    this.props.updateModal()
  }

  render() {
    return (
      <div className="new-contact-wrap">
        <div className="new-contact-title">Add new contact</div>
          <div className="text text-danger" style={{'float':'right'}} onClick={this.props.updateModal}>cancel</div>
          <hr style={{'clear':'both', 'cursor':'pointer'}}/>
        <div className="nc-contact-form">
          <form className = "form-group" onSubmit={this.onSubmitForm}>
          <div className = "form-group">
            <input
            className="form-control"
            type="text"
            placeholder="First Name"
            onChange={this.handleFNameChange}></input></div>
          <div className = "form-group">
            <input
            className="form-control"
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleLNameChange}></input>
          </div>
          <div className = "form-group">
            <input
            className="form-control"
            type="text"
            name="telephone"
            placeholder="telephone"
            onChange={this.handleTelephoneChange}></input></div>
          <div className = "form-group">
            <input
            className="form-control"
            type="text"
            name="email"
            placeholder="email"
            onChange={this.handleEmailChange}></input>
          </div>
            <button className='btn btn-success btn-xs'>Save</button>
          </form>
        </div>
        <div
          className="content"
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    contacts: state.contactList
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    updateContact
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(NewContact);
