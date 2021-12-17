import { Component } from 'react/cjs/react.production.min';
// import { nanoid } from 'nanoid';
// import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';

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
    console.log(this.state);
  };

  render() {
    // console.log(this.state.name);
    // console.log(this.state.contacts);
    return (
      <div className={s.app}>
        <img src={logo} className={s.appLogo} alt="logo" />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        {/* <ContactList ... /> */}
      </div>
    );
  }
}

export default App;
