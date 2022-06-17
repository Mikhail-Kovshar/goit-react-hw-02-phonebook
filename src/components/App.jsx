import React, { Component } from "react"
import s from './App.module.css'
import ContactsList from './ContactList/ContactList';
import Form from './Form/Form';
import Filter from './Filter/Filter';

// import { nanoid } from 'nanoid'
// export class App extends Component{
//   state = {
//     contacts: [
//       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     name: '',
//     number:'',
//     filter: ''
//   };
//   handleSubmit= e =>{
//     e.preventDefault();
//        const  newContact ={
//       name : this.state.name,
//       number: this.state.number,
//       id : nanoid()
//     }
//        this.setState(prevState => ({
//       contacts: [newContact, ...prevState.contacts],
//     }));
//     this.reset();
//   };
//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };
//   handleChange = e =>{
//        this.setState({
//       [e.currentTarget.name]:e.currentTarget.value
//     })
//   }
  
// render(){
//   const normolizedFilter = this.state.filter.toLowerCase();
//   const  visibleContacts = this.state.contacts.filter(contact =>contact.name.toLowerCase().includes(normolizedFilter),);
//   return (
//     <div >
//       <h2>Pfonebook</h2>
//       <div className={s.container}>
//         <form onSubmit={this.handleSubmit}>
//           <label
//            className ={s.label}
//           >Name
//           <input
//     type="text"
//     name="name"
//     value = {this.state.name}
//     onChange={this.handleChange}
//     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//     required
//   />
//           </label>
//           <label  className ={s.label}>Number
//           <input
//   type="tel"
//   name="number"
//   value = {this.state.number}
//   onChange={this.handleChange}
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//   required
// />
//           </label>
//           <button type="submit"> Add contact</button>
//         </form>
//     </div>
//     <div>
//       <div>
//         <label className ={s.label} > Find Contacts by Name
//         <input 
//         className={s.filter}
//         type ="text" 
//          name="filter"
//         value = {this.state.filter}
//         onChange={this.handleChange}/>
//          </label>
//       </div>
//     <h2 className={s.title}>Contacts</h2>
//     <ul>
//       {visibleContacts.map(contact =>
//         <li 
//         key={contact.id}>{contact.name}: {contact.number}</li>
//         )}
//     </ul>
//     </div>
//     </div>
//   )}
// }; step1
export  class App extends Component{

  state = {
    contacts: [],
    filter: ''
  }

  saveContact = newContact => {
    this.state.contacts.find(contact => contact.name === newContact.name)
      ? this.showAlert(newContact.name)
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };
  showAlert = name => {
    const message = `${name} is already in contacts`;
    alert(message);
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 18,
        }}
      >
        <h2 className={s.title}>Phonebook</h2>
        <div className={s.wrapper__phonebook}>
          <Form saveContact={this.saveContact} />
        </div>

        <h2 className={s.title}>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter} />
        <div className={s.wrapper__contacts}>
          {contacts.length !== 0 ? (
            <ContactsList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}


