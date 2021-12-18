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
