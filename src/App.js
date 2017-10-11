import React, { Component } from 'react';
import ContactList from './components/contacts-list';
import DisplayContact from './components/display-contact';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <ContactList />
        <DisplayContact />
        <div className="clear-fix"></div>

      </div>
    );
  }
}

export default App;
