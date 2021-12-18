import PropTypes from 'prop-types';

export default function ContactList(props) {
  const { contacts } = props;
  console.log(props);

  return (
    <ul className="ContactList">
      {contacts.map(({ name, number, id }) => (
        <li className="item" key={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  props: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.exact({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
      }),
    ),
  ),
};
