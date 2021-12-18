import { Component } from 'react/cjs/react.production.min';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

import logo from './logo.svg';
import s from './App.module.scss';

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = data => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, data],
    }));

    // console.log(this.state.contacts);
  };

  render() {
    const ContactsArray = this.state.contacts;
    // console.log(this.state.name);
    // console.log(this.state.contacts);
    return (
      <div className={s.app}>
        <img src={logo} className={s.appLogo} alt="logo" />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList contacts={ContactsArray} />
      </div>
    );
  }
}

export default App;
