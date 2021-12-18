// import PropTypes from 'prop-types';
import { Component } from 'react/cjs/react.development';

export default class Filter extends Component {
  state = {
    filter: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });

    this.props.onChange(this.state);
  };

  render() {
    return (
      <label>
        Find contacts by name
        <input
          className=""
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.filter}
          onChange={this.handleInputChange}
        />
      </label>
    );
  }
}
