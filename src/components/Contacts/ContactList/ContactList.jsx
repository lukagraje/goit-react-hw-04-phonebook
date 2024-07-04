import PropTypes from "prop-types";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
    ).isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
