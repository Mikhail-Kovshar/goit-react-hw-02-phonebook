import s from './ContactList.module.css';
import React, { Component } from 'react';

import Contact from 'components/Contact/Contact';

class ContactsList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    
    return (
      <ul className={s.contactsList}>
        {contacts.map(contact => (
          <Contact
            contact={contact}
            key={contact.id}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    );
  }
}

export default ContactsList;