import React, { Component } from "react";
import ContactsForm from "./components/contacts-form/ContactsForm";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  onAddContact = (contact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <main className="App">
        <h1>Phone book</h1>
        <ContactsForm onAddContact={this.onAddContact} />
      </main>
    );
  }
}

export default App;
