import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {showContact, sortContacts, searchContactList} from '../actions/update-contacts';

class ContactList extends Component {

  constructor(){
    super();
    this.handleSearch = this.handleSearch.bind(this)
    this.state = {
      search:''
    }
  }

  showSingleContact(contact){
    console.log('show single ', contact.lastName)
    return(
      <div>
        <p>{contact.firstName}</p>
        <p>{contact.lastName}</p>
        <p>{contact.email}</p>
        <p>{contact.telephone}</p>
      </div>
    )
  }

  componentDidMount(){
    this.props.sortContacts();
  }

  showContacts(){
    return(
      <div>
        { this.props.contacts.contacts.map((contact, i)=>{
          return (
            <ul
              className="list-group"
              key={i}
              onClick={()=>{this.props.showContact(contact)}}>
              <li className="list-group-item ct-list-item">
                <span>{contact.firstName} </span>
                <span>{contact.lastName}</span>
              </li>
            </ul>
            )
          })
        }
      </div>
    )
  }

  handleSearch(e){
    this.setState({search: e.target.value});
    this.props.searchContactList(e.target.value)
    // console.log(this.state.search)
  }


  // <input placeholder="Name Search" type="text" onChange={this.handleSearch}/>
  // <p>Search:{this.state.search}</p>



  render() {

    return (
      <div className="ct-list-wrap">

        <div>
          <div className="ct-list-scroll">
            <div className="contact-list">
              {this.showContacts()}
            </div>
            <div>
              {this.showSingleContact}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    showContact,
    searchContactList,
    sortContacts
  }, dispatch)
}

function mapStateToProps(state){
  return{
    contacts: state.contactList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
