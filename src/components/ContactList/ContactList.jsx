import PropTypes from 'prop-types';

export default function ContactList(props) {
  const { contacts, onDelete } = props;

  return (
    <ul className="ContactList">
      {contacts.map(({ name, number, id }) => (
        <li className="item" key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => onDelete(name)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.number.isRequired,
//     }),
//   ),
// };
