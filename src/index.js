import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContactsCrudContextProvider } from "./context/contactsCrud";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContactsCrudContextProvider>
      <App />
    </ContactsCrudContextProvider>
  </React.StrictMode>
);
