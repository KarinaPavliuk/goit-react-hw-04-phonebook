import { Component } from 'react';
import { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ createContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const handleNumberChange = ({ target }) => {
    setNumber(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    createContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleNameChange}
          required
        />
        <label htmlFor="tel">Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleNumberChange}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = ({ target }) => {
//     setState({
//       [target.name]: target.value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     props.createContact(state);
//     setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={handleSubmit} className={css.form}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           onChange={handleChange}
//           required
//         />
//         <label htmlFor="tel">Number</label>
//         <input
//           type="tel"
//           name="number"
//           value={number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }
