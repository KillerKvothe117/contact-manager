import "./App.css";
import uuid from "react-uuid";
import Header from "./components/header";
import AddContact from "./components/addContact";
import ContactList from "./components/contactList";
import { useEffect, useState } from "react";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  );

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  // useEffect(() => {
  //   const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (getContacts) setContacts(getContacts);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactID={removeContactHandler} />
    </div>
  );
}

export default App;
