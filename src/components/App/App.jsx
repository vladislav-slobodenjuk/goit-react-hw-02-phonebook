import { Component } from 'react/cjs/react.production.min';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import logo from './logo.svg';
import s from './App.module.scss';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, data],
    }));
  };

  filterContacts = data => {
    console.log(data);
    console.log(this.state);

    // let check = Boolean(this.state.filter);
    // console.log(check);
  };

  render() {
    const ContactsArray = this.state.contacts;

    // console.log(this.state.filter);
    // let check = Boolean(this.state.filter);
    // console.log(check);

    // console.log(this.state.name);
    // console.log(this.state.contacts);
    return (
      <div className={s.app}>
        <img src={logo} className={s.appLogo} alt="logo" />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.filterContacts} />
        <ContactList contacts={ContactsArray} />
      </div>
    );
  }
}

export default App;
