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
    try {
      const result = await addTransaction(form);
      if (result) {
        alert('Transaction added successfully!'); // Alert on successful addition
        setForm({ description: '', amount: '', category: '', date: '' });
      } else {
        console.error('Failed to add transaction.');
        alert('Failed to add transaction. Please try again.'); // Alert on failure
      }
    } catch (error) {
      console.error('Failed to add transaction:', error);
      alert('An error occurred while adding the transaction.'); // Alert on error
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
