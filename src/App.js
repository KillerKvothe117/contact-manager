import "./App.css";
import Header from "./components/header";
import AddContact from "./components/addContact";
import ContactList from "./components/contactList";

function App() {
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App;
