import { Component } from 'react/cjs/react.production.min';
// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import s from './ContactForm.module.scss';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      id: nanoid(8),
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className={s.mainForm} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className={s.nameInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Number
          <input
            className={s.telInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.tel}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

// Form.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
//   onSubmit: PropTypes.func,
// };
