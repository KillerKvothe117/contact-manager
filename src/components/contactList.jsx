import React from "react";
import ContactCard from "./contactCard";

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

  return <div className="ui celled list">{showContacts}</div>;
};

export default ContactList;
