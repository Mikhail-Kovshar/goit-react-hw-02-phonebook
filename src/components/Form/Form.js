import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  handelInputChange = e => {
    const { name, value } = e.currentTarget;
    // const contactId = this.contactInputId;
    this.setState({ [name]: value, id: nanoid() });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.saveContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '', id: '' });
  };
  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.form__field}>
          Name
          <input
            className={s.form__input}
            value={this.state.name}
            onChange={this.handelInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.form__field}>
          Number
          <input
            className={s.form__input}
            value={this.state.number}
            onChange={this.handelInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={s.form__btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default Form;