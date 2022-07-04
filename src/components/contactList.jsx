import React from "react";
import ContactCard from "./contactCard";

const ContactList = (props) => {
  const showContacts = props.contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });

  return <div className="ui celled list">{showContacts}</div>;
};

export default ContactList;
