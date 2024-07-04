import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./SearchFilter/Filter";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      filter: "",
    };
  }

  addContact = ({ name, number }) => {
    const checkContact = this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (checkContact) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, { name, number, id: nanoid() }],
      }));
    }
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId,
      ),
    }));
  };

  handleChange = (ev) => {
    const { name, value } = ev.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  handleChangeFilter = (evt) => {
    this.setState({ filter: evt.target.value });
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleChangeFilter} />
        <ContactList contacts={contacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}
