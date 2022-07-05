import React from "react";
import ContactCard from "./contactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const deleteContact = (id) => {
    props.getContactID(id);
  };

  const showContacts = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        clickHandler={deleteContact}
      />
    );
  });

  return (
    <div className="main">
      <h2>Contact List</h2>
      <Link to="/add">
        <button className="ui button blue">Add Contact</button>
      </Link>
      <div className="ui celled list">{showContacts}</div>
    </div>
  );
};

export default ContactList;
