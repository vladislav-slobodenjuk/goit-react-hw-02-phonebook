import { Component } from 'react/cjs/react.production.min';
// import PropTypes from 'prop-types';
import s from './ContactForm.module.scss';

export default class Form extends Component {
  state = {
    name: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
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
