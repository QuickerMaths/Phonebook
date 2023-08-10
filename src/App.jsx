import React from "react";
import { nanoid } from "nanoid";
import ContactsForm from "./components/contacts-form/ContactsForm";
import Filter from "./components/filter/Filter";
import ContactsList from "./components/contacts-list/ContactsList";
import { useAppContext } from "./context/AppContext";

// class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };

//   async componentDidMount() {
//     const contacts =  JSON.parse(localStorage.getItem("contacts"));

//     if (contacts) {
//       this.setState({ contacts });
//     }
//   }

//   onAddContact = (contact) => {
//     const isContactExist = this.state.contacts.some(
//       (item) => item.name.toLowerCase() === contact.name.toLowerCase()
//     );

//     if (isContactExist) {
//       alert(`${contact.name} is already in contacts`);
//       return;
//     }

//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
//     }));

//     localStorage.setItem(
//       "contacts",
//       JSON.stringify([...this.state.contacts, { ...contact, id: nanoid() }])
//     );
//   };

//   onDeleteContact = (id) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter((contact) => contact.id !== id),
//     }));

//     localStorage.setItem(
//       "contacts",
//       JSON.stringify(this.state.contacts.filter((contact) => contact.id !== id))
//     );
//   };

//   setFilter = (filter) => {
//     this.setState({ filter });
//   };

//   render() {
//     return (
//       <main className="App">
//         <h1>Phone book</h1>
//         <ContactsForm onAddContact={this.onAddContact} />

//         <h2>Contacts</h2>
//         <Filter setFilter={this.setFilter} />
//         <ContactsList
//           contacts={this.state.contacts}
//           filter={this.state.filter}
//           onDeleteContact={this.onDeleteContact}
//         />
//       </main>
//     );
//   }
// }

const App = () => {
  const {
    state: { contacts },
    dispatch,
  } = useAppContext();
  return (
    <main className="App">
      <h1>Phone book</h1>
      {/* <ContactsForm /> */}

      <h2>Contacts</h2>
      {/* <Filter setFilter={this.setFilter} /> */}
      <ContactsList
        contacts={contacts}
        // filter={this.state.filter}
        // onDeleteContact={this.onDeleteContact}
      />
    </main>
  );
};

export default App;
