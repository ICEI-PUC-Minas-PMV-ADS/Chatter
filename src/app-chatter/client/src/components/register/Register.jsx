import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import style from './Register.module.css';
import { Input, Button } from '@mui/material';

const Register = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementar a lógica de registro aqui
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Registro com telefone</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <div>
          <label htmlFor="name" className={style.label}>
            Nome:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            className={style.input}
          />
        </div>
        <div>
          <label htmlFor="phone" className={style.label}>
            Telefone:
          </label>
          <InputMask
            type="tel"
            id="phone"
            name="phone"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className={style.input}
            mask="(99) 99999-9999"
            maskPlaceholder=""
          />
        </div>
        <button type="submit" className={style.button}>
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Register;
