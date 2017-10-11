import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteContact, editContact } from '../actions/update-contacts';


class DisplayContact extends Component {
  constructor(){
    super();
    this.handleFNameChange = this.handleFNameChange.bind(this)
    this.handleLNameChange = this.handleLNameChange.bind(this)
    this.handleTelephoneChange = this.handleTelephoneChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.displayActiveContact = this.displayActiveContact.bind(this)
    this.editContactHandler = this.editContactHandler.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.handleModalState = this.handleModalState.bind(this)

    this.state = ({
      editArray : false,
      firstName:'',
      lastName:'',
      email:'',
      telephone:''

    })
  }
  editContactHandler(){
    this.setState({

      firstName:this.props.activeContact.firstName,
      lastName:this.props.activeContact.lastName,
      email:this.props.activeContact.email,
      telephone:this.props.activeContact.telephone
    })

    this.handleModalState()

  }

  handleModalState(){
    this.setState({
      editArray:!this.state.editArray,
    })
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
    this.props.editContact(this.state)
    this.handleModalState()

  }

  displayActiveContact(){
    if(this.props.activeContact && !this.state.editArray){
      return (


        <div className="card" style={{"marginTop":'10px', 'padding':'10px'}}>
          <div className="card-block">

            <h3 className="card-title">
              {this.props.activeContact.firstName} {this.props.activeContact.lastName}
            </h3>

            <div className="card-subtitle" style={{"margin":"5px 0px 0px 0px"}}>
              <div><span className="contact-prefix">Tel: </span>{this.props.activeContact.telephone}</div>
            </div>
            <div className="card-subtitle" style={{"margin":"5px 0px 5px 0px"}}>
              <div><span className="contact-prefix">Email:</span> {this.props.activeContact.email}</div>
            </div>
          </div>
          <div className="">
            <button className="btn btn-success btn-sm" onClick={this.editContactHandler}>EDIT</button>
            <button style={{'marginLeft':'10px'}}className="btn btn-danger btn-sm" onClick={ () => {this.props.deleteContact(this.props.activeContact)} }>DELETE</button>
          </div>



        </div>
      )
    } else if(this.props.activeContact && this.state.editArray){
      return (
        <div>
          <div className='text text-danger' style={{cursor:'pointer', 'float':'right'}} onClick={ () => { this.setState({editArray:!this.state.editArray}) }}>CANCEL</div>
          <form onSubmit={this.onSubmitForm}>
            <div className = "form-group"><input className="form-control" type="text" onChange={this.handleFNameChange} placeholder={this.props.activeContact.firstName} defaultValue={this.props.activeContact.firstName} /></div>
            <div className = "form-group"><input className="form-control" type="text" onChange={this.handleLNameChange} placeholder={this.props.activeContact.lastName} defaultValue={this.props.activeContact.lastName} /></div>
            <div className = "form-group"><input className="form-control" type="text" onChange={this.handleTelephoneChange} placeholder={this.props.activeContact.email} defaultValue={this.props.activeContact.email} /></div>
            <div className = "form-group"><input className="form-control" type="text" onChange={this.handleEmailChange} placeholder={this.props.activeContact.telephone} defaultValue={this.props.activeContact.telephone} /></div>
            <button className='btn btn-sm btn-success'>update</button>
        </form>
        </div>
      )
    }
  }
  render() {

    return (
      <div className="display-wrap">
        {this.displayActiveContact()}
      </div>
    );
  }
}

function mapStateToProps(state){

  return{
    activeContact: state.contactList.activeContact
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    deleteContact,
    editContact
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContact);
