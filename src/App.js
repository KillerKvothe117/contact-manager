import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import AddContact from "./components/addContact";
import ContactList from "./components/contactList";
import ContactDetails from "./components/contactDetails";
import EditContact from "./components/editContact";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit" element={<EditContact />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
