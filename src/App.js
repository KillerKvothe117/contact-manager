import "./App.css";
import Header from "./components/header";
import AddContact from "./components/addContact";
import ContactList from "./components/contactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Kosi",
      email: "kelo117@gmail.com",
    },
    {
      id: "2",
      name: "Emmanuel",
      email: "emmy24@yahoo.com",
    },
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
