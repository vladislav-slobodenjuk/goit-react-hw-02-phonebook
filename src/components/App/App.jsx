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

  setFilter = data => {
    this.setState({ filter: data.target.value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const lowFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(lowFilter),
    );
    console.log(filteredContacts);
    return filteredContacts;
  };

  render() {
    const filteredContacts = this.filterContacts();
    console.log(this.state.filter);

    return (
      <div className={s.app}>
        <img src={logo} className={s.appLogo} alt="logo" />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.setFilter} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}

export default App;
