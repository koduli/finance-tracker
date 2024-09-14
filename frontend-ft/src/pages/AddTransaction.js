// src/pages/AddTransaction.js
import React, { useState } from 'react';
import { addTransaction } from '../services/api';

function AddTransaction() {
  const [form, setForm] = useState({ description: '', amount: '' });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTransaction(form);
    setForm({ description: '', amount: '' });
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTransaction;
