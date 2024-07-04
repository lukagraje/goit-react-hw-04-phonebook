import PropTypes from "prop-types";
import css from "./item.module.scss";

const ContactItem = ({ name, number, id, deleteContact }) => {
  return (
    <li key={id}>
      {name}: {number}
      <button className={css.button} onClick={() => deleteContact(id) }>Delete contact</button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
