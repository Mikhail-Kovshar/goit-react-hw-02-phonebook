import s from './Contact.module.css';
import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    const { contact, onDeleteContact } = this.props;
    return (
      <li className={s.contactsListItem}>
        <p className={s.contactsListName}>{contact.name}</p>
        <p className={s.contactsListName}>{contact.number}</p>
        <button
          className={s.contactsListBtn}
          onClick={() => onDeleteContact(contact.id)}
        >
          Удалить
        </button>
      </li>
    );
  }
}