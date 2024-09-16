// src/pages/AddTransaction.js
import React, { useState } from 'react';
import { addTransaction } from '../services/api';
import '../styles/main.css';

function AddTransaction() {
  const [form, setForm] = useState({
    description: '',
    amount: '',
    category: '',
    date: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', form); // Log form data to debug
    try {
      const result = await addTransaction(form);
      if (result) {
        console.log('Transaction added successfully:', result);
        setForm({ description: '', amount: '', category: '', date: '' });
      } else {
        console.error('Failed to add transaction.');
      }
    } catch (error) {
      console.error('Failed to add transaction:', error);
    }
  };

  return (
    <div className="main-container">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
        />
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
          <option value="Others">Others</option>
        </select>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default AddTransaction;
