import { Component, useState, useEffect } from 'react';

import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localData = localStorage.getItem('contacts');
    if (localData) {
      setContacts(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = ({ target }) => {
    setFilter(target.value);
  };

  const onDeleteClick = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const createContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts([...contacts, { ...newContact, id: nanoid() }]);
  };

  const getFilteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm createContact={createContact} />
      <h2>Contacts</h2>
      <Filter handleChange={handleFilterChange} value={filter} />
      <ContactList
        filteredContacts={filteredContacts}
        onDeleteClick={onDeleteClick}
      />
    </div>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const localData = localStorage.getItem('contacts');
//     if (localData) {
//       this.setState({ contacts: JSON.parse(localData) });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts.length !== this.state.contacts.length) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   handleChange = ({ target }) => {
//     this.setState({
//       [target.name]: target.value,
//     });
//   };

//   onDeleteClick = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   createContact = newContact => {
//     if (
//       this.state.contacts.some(
//         contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
//       )
//     ) {
//       alert(`${newContact.name} is already in contacts.`);
//       return;
//     }

//     this.setState(prevState => {
//       return {
//         contacts: [
//           ...prevState.contacts,
//           {
//             ...newContact,
//             id: nanoid(),
//           },
//         ],
//       };
//     });
//   };

//   getFilteredContacts = () => {
//     return this.state.contacts.filter(({ name }) =>
//       name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );
//   };

//   render() {
//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm createContact={this.createContact} />
//         <h2>Contacts</h2>
//         <Filter handleChange={this.handleChange} value={this.state.filter} />
//         <ContactList
//           filteredContacts={filteredContacts}
//           onDeleteClick={this.onDeleteClick}
//         />
//       </div>
//     );
//   }
// }
