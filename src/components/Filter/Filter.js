import React, { Component } from 'react';
import s from './Filter.module.css';
import { nanoid } from 'nanoid';

class Filter extends Component {
  loginInputId = nanoid();
  render() {
    const { filter, onChange } = this.props;
    return (
      <div className={s.filter__wrapper}>
        <label className={s.filter__field} htmlFor={this.loginInputId} />
        Find contact by name:
        <input
          id={this.loginInputId}
          className={s.filter__input}
          type="text"
          value={filter}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Filter;