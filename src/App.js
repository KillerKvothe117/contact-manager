import "./App.css";
import Header from "./components/header";
import AddContact from "./components/addContact";
import ContactList from "./components/contactList";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
